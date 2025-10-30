import { useState } from 'react';
// Import all JSON files from the data directory
import amtlicheSchulstatistik from '@/assets/data/amtliche_schulstatistik.json';
import hansefitAnmeldung from '@/assets/data/hansefit_anmeldung.json';
import wahlhelfer from '@/assets/data/wahlhelfer.json';
import wlanAccessPoint from '@/assets/data/wlan_access_point.json';
import { useAddFormQuestion } from '@/components/features/forms/useAddFormQuestion';
import { useSaveForm } from '@/components/features/forms/useSaveForm';
import { useSaveOption } from '@/components/features/forms/useSaveOption';
import { useSaveQuestion } from '@/components/features/forms/useSaveQuestion';
import { Button } from '@/components/shared/Button';
import { useNotifications } from '@/components/shared/Notification';
import { type ParsedForm, parseExternalForm } from '@/utils/parseExternalForm';

interface DataFile {
  name: string;
  data: unknown;
}

export function DataPage() {
  const [files, setFiles] = useState<DataFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<DataFile | null>(null);
  const [parsedForm, setParsedForm] = useState<ParsedForm | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const { handleSave: saveForm } = useSaveForm();
  const { saveQuestion } = useSaveQuestion();
  const { saveOption } = useSaveOption();
  const { addFormQuestion } = useAddFormQuestion();
  const { addNotification } = useNotifications();

  const handleSync = () => {
    const dataFiles: DataFile[] = [
      { name: 'amtliche_schulstatistik.json', data: amtlicheSchulstatistik },
      { name: 'hansefit_anmeldung.json', data: hansefitAnmeldung },
      { name: 'wahlhelfer.json', data: wahlhelfer },
      { name: 'wlan_access_point.json', data: wlanAccessPoint },
    ];
    setFiles(dataFiles);
  };

  const handleFileSelect = (file: DataFile) => {
    setSelectedFile(file);
    try {
      const parsed = parseExternalForm(file.data as any);
      setParsedForm(parsed);
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Failed to parse file',
        message: (error as Error).message,
      });
      setParsedForm(null);
    }
  };

  const handleCreateForm = async () => {
    if (!parsedForm) return;

    setIsCreating(true);
    const startTime = Date.now();

    try {
      const totalQuestions = parsedForm.questions.length;
      const totalOptions = parsedForm.questions.reduce(
        (sum, q) => sum + (q.options?.length || 0),
        0,
      );

      console.log(
        `Creating form with ${totalQuestions} questions and ${totalOptions} options`,
      );

      // Step 1: Create the form
      addNotification({
        type: 'info',
        title: 'Creating form...',
        message: `${totalQuestions} questions, ${totalOptions} options`,
      });
      const form = await saveForm(parsedForm.form);
      if (!form) throw new Error('Failed to create form');

      // Step 2: Collect all unique options and create them in parallel batches
      const optionCache = new Map<string, string>(); // slug -> id
      const allOptions = parsedForm.questions.flatMap((q) => q.options || []);

      if (allOptions.length > 0) {
        addNotification({
          type: 'info',
          title: `Creating ${allOptions.length} options...`,
        });

        // Create options in batches of 50 to avoid overwhelming the server
        const BATCH_SIZE = 50;
        for (let i = 0; i < allOptions.length; i += BATCH_SIZE) {
          const batch = allOptions.slice(i, i + BATCH_SIZE);
          const optionPromises = batch.map(async (optionInput) => {
            // Skip if already created (deduplication by slug)
            if (optionCache.has(optionInput.slug)) {
              return null;
            }
            try {
              const option = await saveOption(optionInput);
              if (option?.id) {
                optionCache.set(optionInput.slug, option.id);
                return option;
              }
            } catch (error) {
              console.warn(
                `Failed to create option ${optionInput.slug}:`,
                error,
              );
            }
            return null;
          });

          await Promise.all(optionPromises);
          console.log(
            `Created options batch ${i / BATCH_SIZE + 1}/${Math.ceil(allOptions.length / BATCH_SIZE)}`,
          );
        }

        addNotification({
          type: 'info',
          title: `Created ${optionCache.size} unique options`,
        });
      }

      // Step 3: Create questions in batches
      addNotification({
        type: 'info',
        title: `Creating ${totalQuestions} questions...`,
      });

      const questionIds: string[] = [];
      const QUESTION_BATCH_SIZE = 20;

      for (
        let i = 0;
        i < parsedForm.questions.length;
        i += QUESTION_BATCH_SIZE
      ) {
        const batch = parsedForm.questions.slice(i, i + QUESTION_BATCH_SIZE);
        const questionPromises = batch.map(async (question) => {
          try {
            // Build question input with option IDs
            const questionInput = {
              ...question.input,
              __typename: question.__typename,
            };

            // Map option slugs to IDs for ChoiceQuestion
            if (question.__typename === 'ChoiceQuestion' && question.options) {
              const optionIds = question.options
                .map((opt) => optionCache.get(opt.slug))
                .filter((id): id is string => id !== undefined);

              if (optionIds.length > 0) {
                (questionInput as any).options = optionIds;
              }
            }

            const createdQuestion = await saveQuestion(questionInput as any);
            if (createdQuestion?.id) {
              return createdQuestion.id;
            }
          } catch (error) {
            console.warn(
              `Failed to create question ${question.input.slug}:`,
              error,
            );
          }
          return null;
        });

        const batchResults = await Promise.all(questionPromises);
        questionIds.push(
          ...batchResults.filter((id): id is string => id !== null),
        );

        console.log(
          `Created questions batch ${i / QUESTION_BATCH_SIZE + 1}/${Math.ceil(parsedForm.questions.length / QUESTION_BATCH_SIZE)}`,
        );
      }

      // Step 4: Link questions to form in batches
      addNotification({
        type: 'info',
        title: `Linking ${questionIds.length} questions to form...`,
      });

      const LINK_BATCH_SIZE = 30;
      for (let i = 0; i < questionIds.length; i += LINK_BATCH_SIZE) {
        const batch = questionIds.slice(i, i + LINK_BATCH_SIZE);
        const linkPromises = batch.map((questionId) =>
          addFormQuestion({
            form: form.id,
            question: questionId,
          }).catch((error) => {
            console.warn(`Failed to link question ${questionId}:`, error);
          }),
        );

        await Promise.all(linkPromises);
        console.log(
          `Linked questions batch ${i / LINK_BATCH_SIZE + 1}/${Math.ceil(questionIds.length / LINK_BATCH_SIZE)}`,
        );
      }

      const duration = ((Date.now() - startTime) / 1000).toFixed(1);
      addNotification({
        type: 'success',
        title: 'Form created successfully',
        message: `Created "${form.name}" with ${questionIds.length}/${totalQuestions} questions in ${duration}s`,
      });
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Failed to create form',
        message: (error as Error).message,
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>External Data Import</h1>
      <p>Import external JSON data files and convert them to Caluma forms</p>

      <Button onClick={handleSync}>Load Files</Button>

      {files.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Available Files</h2>
          <ul>
            {files.map((file) => (
              <li key={file.name}>
                <button
                  type="button"
                  onClick={() => handleFileSelect(file)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: selectedFile?.name === file.name ? 'green' : 'blue',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    fontWeight:
                      selectedFile?.name === file.name ? 'bold' : 'normal',
                  }}
                >
                  {file.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {parsedForm && (
        <div style={{ marginTop: '20px' }}>
          <h2>Parsed Form Preview</h2>
          <div
            style={{
              background: '#f0f9ff',
              padding: '15px',
              borderRadius: '4px',
              marginBottom: '15px',
            }}
          >
            <h3>{parsedForm.form.name}</h3>
            <p>
              <strong>Slug:</strong> {parsedForm.form.slug}
            </p>
            <p>
              <strong>Description:</strong> {parsedForm.form.description}
            </p>
            <p>
              <strong>Questions:</strong> {parsedForm.questions.length}
            </p>
          </div>

          <h3>Questions</h3>
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {parsedForm.questions.map((q) => (
              <div
                key={q.input.slug}
                style={{
                  background: '#f5f5f5',
                  padding: '10px',
                  marginBottom: '10px',
                  borderRadius: '4px',
                }}
              >
                <div>
                  <strong>{q.input.label}</strong> ({q.__typename})
                </div>
                <div style={{ fontSize: '0.9em', color: '#666' }}>
                  Slug: {q.input.slug}
                </div>
                {q.options && (
                  <div style={{ marginTop: '5px' }}>
                    <em>Options: {q.options.length}</em>
                    <ul style={{ margin: '5px 0', paddingLeft: '20px' }}>
                      {q.options.slice(0, 3).map((opt) => (
                        <li key={opt.slug} style={{ fontSize: '0.85em' }}>
                          {opt.label}
                        </li>
                      ))}
                      {q.options.length > 3 && (
                        <li style={{ fontSize: '0.85em', color: '#666' }}>
                          ...and {q.options.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px' }}>
            <Button onClick={handleCreateForm} disabled={isCreating}>
              {isCreating ? 'Creating...' : 'Create Form in Caluma'}
            </Button>
          </div>
        </div>
      )}

      {selectedFile && !parsedForm && (
        <div style={{ marginTop: '20px' }}>
          <h2>Raw Data</h2>
          <pre
            style={{
              background: '#f5f5f5',
              padding: '15px',
              borderRadius: '4px',
              overflow: 'auto',
              maxHeight: '500px',
            }}
          >
            {JSON.stringify(selectedFile.data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
