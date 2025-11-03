import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { MoveIcon, Trash } from '@icons';
import { useState } from 'react';
import { IconButton } from '@/components/shared/IconButton';
import { useNotifications } from '@/components/shared/Notification';
import { SortableItem, SortableList } from '@/components/shared/Sortable';
import { useGetFormQuestions } from '../hooks/useGetFormQuestions';
import { useRemoveFormQuestion } from '../hooks/useRemoveFormQuestion';
import { useReorderQuestions } from '../hooks/useReorderQuestions';
import './FormQuestionsList.css';

type Question = {
  id: string;
  slug: string;
  label?: string | null;
};

export function FormQuestionsList({ formSlug }: { formSlug: string }) {
  const { addNotification } = useNotifications();
  const { questions: fetchedQuestions, refetch } =
    useGetFormQuestions(formSlug);
  const { deleteQuestion } = useRemoveFormQuestion();
  const { reorderQuestions } = useReorderQuestions();

  const [localQuestions, setLocalQuestions] = useState<Question[] | null>(null);

  const questions = localQuestions ?? fetchedQuestions;

  async function handleReorder(newQuestions: Question[]) {
    const previousQuestions = questions;
    setLocalQuestions(newQuestions);

    try {
      await reorderQuestions(
        formSlug,
        newQuestions.map((q) => q.id),
      );
      addNotification({
        type: 'success',
        title: 'Fragen neu geordnet',
        message: 'Die Reihenfolge wurde erfolgreich aktualisiert.',
      });
      await refetch();
      setLocalQuestions(null);
    } catch (err) {
      setLocalQuestions(previousQuestions);
      addNotification({
        type: 'error',
        title: 'Fehler beim Neuordnen',
        message: (err as Error).message,
      });
    }
  }

  async function removeQuestion(questionId: string) {
    try {
      await deleteQuestion(formSlug, questionId);
      setLocalQuestions(null);
      await refetch();
      addNotification({
        type: 'success',
        title: 'Frage erfolgreich gelöscht',
        message: 'Die Frage wurde aus dem Formular entfernt.',
      });
    } catch (err) {
      addNotification({
        type: 'error',
        title: 'Fehler beim Fragelöschen',
        message: (err as Error).message,
      });
    }
  }

  return (
    <SortableList
      items={questions}
      getItemId={(q) => q.id}
      onReorder={handleReorder}
      modifiers={[restrictToVerticalAxis]}
    >
      <div className="form-question-list">
        {questions.map((question) => (
          <SortableItem
            key={question.id}
            id={question.id}
            className="form-question-list-item"
          >
            {(dragHandleProps) => (
              <>
                <IconButton
                  ref={dragHandleProps.ref}
                  icon={<MoveIcon />}
                  color="anthracite"
                  size="md"
                  aria-label="Frage verschieben"
                  {...dragHandleProps.listeners}
                />
                <h5 className="form-question-list-item-label">
                  {question.label || question.slug}
                </h5>
                <IconButton
                  icon={<Trash />}
                  color="red"
                  size="sm"
                  onClick={() => removeQuestion(question.id)}
                />
              </>
            )}
          </SortableItem>
        ))}
      </div>
    </SortableList>
  );
}
