import { Button } from '@shared/Button';
import { Input } from '@shared/Input';
import { TextArea } from '@shared/TextArea';
import { Toggle } from '@shared/Toggle';
import { useMemo, useState } from 'react';
import './FormDetails.css';
import { useMutation } from '@apollo/client/react';
import { useNotifications } from '@/components/shared/Notification';
import { SaveFormDocument } from '@/gql/__generated__/graphql';

interface FormValues {
  name: string;
  slug: string;
  description: string;
  isArchived: boolean;
  isPublished: boolean;
}

interface FormDetailsProps {
  initialName?: string;
  initialSlug?: string;
  initialDescription?: string;
  initialIsArchived?: boolean;
  initialIsPublished?: boolean;
  onSave?: (data: {
    name: string;
    slug: string;
    description: string;
    isArchived: boolean;
    isPublished: boolean;
  }) => void;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function FormDetails({
  initialName = '',
  initialSlug = '',
  initialDescription = '',
  initialIsArchived = false,
  initialIsPublished = false,
  onSave,
}: FormDetailsProps) {
  const [saveForm] = useMutation(SaveFormDocument);
  const { addNotification } = useNotifications();

  const [values, setValues] = useState<FormValues>({
    name: initialName,
    slug: initialSlug,
    description: initialDescription,
    isArchived: initialIsArchived,
    isPublished: initialIsPublished,
  });
  const [slugTouched, setSlugTouched] = useState(false);

  const suggestedSlug = useMemo(() => slugify(values.name), [values.name]);
  const displaySlug = slugTouched ? values.slug : suggestedSlug;
  const isValid =
    values.name.trim().length > 0 && (values.slug || suggestedSlug);

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, name: e.target.value });
  }

  function handleSlugChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSlugTouched(true);
    setValues({ ...values, slug: e.target.value });
  }

  function handleDescriptionChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setValues({ ...values, description: e.target.value });
  }

  function handleIsArchivedChange(checked: boolean) {
    setValues({ ...values, isArchived: checked });
  }

  function handleIsPublishedChange(checked: boolean) {
    setValues({ ...values, isPublished: checked });
  }

  async function handleSave() {
    if (!isValid) return;

    const finalSlug = slugTouched ? values.slug : suggestedSlug;

    const formData = {
      name: values.name,
      slug: finalSlug,
      description: values.description,
      isArchived: values.isArchived,
      isPublished: values.isPublished,
    };

    try {
      const response = await saveForm({
        variables: { input: formData },
      });

      if (response.data?.saveForm?.form) {
        addNotification({
          type: 'success',
          title: 'Form created successfully',
          message: `Form "${formData.name}" has been created`,
        });

        if (onSave) {
          onSave(formData);
        }
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Unknown error occurred';
      addNotification({
        type: 'error',
        title: 'Failed to create form',
        message: errorMessage,
      });
      console.error('Error saving form:', err);
    }
  }

  return (
    <div className="form-details">
      <Input
        id="name"
        name="name"
        label="Name *"
        value={values.name}
        onChange={handleNameChange}
      />

      <Input
        id="slug"
        name="slug"
        label="Slug *"
        value={displaySlug}
        onChange={handleSlugChange}
        placeholder={suggestedSlug}
      />

      <TextArea
        label="Description"
        value={values.description}
        onChange={handleDescriptionChange}
        placeholder="Enter your description here..."
        rows={5}
      />

      <div className="form-toggles">
        <Toggle
          checked={values.isArchived}
          onChange={handleIsArchivedChange}
          label="Archived"
          size="sm"
          name="isArchived"
        />
        <Toggle
          checked={values.isPublished}
          onChange={handleIsPublishedChange}
          label="Published"
          size="sm"
          name="isPublished"
        />
      </div>

      <div className="form-actions">
        <Button variant="success" onClick={handleSave} disabled={!isValid}>
          SAVE
        </Button>
      </div>
    </div>
  );
}
