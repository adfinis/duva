import { Button } from '@shared/Button';
import { Input } from '@shared/Input';
import { TextArea } from '@shared/TextArea';
import { Toggle } from '@shared/Toggle';
import { useMemo, useState } from 'react';
import './FormDetails.css';
import type { SaveFormInput } from '@/gql/__generated__/graphql';
import { useSaveForm } from './useSaveForm';

interface FormDetailsProps {
  initialValues?: Partial<SaveFormInput>;
  onSave?: (data: SaveFormInput) => void;
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

export function FormDetails({ initialValues, onSave }: FormDetailsProps) {
  const [values, setValues] = useState<SaveFormInput>({
    name: '',
    slug: '',
    description: '',
    isArchived: false,
    isPublished: false,
    ...initialValues,
  });
  const [slugTouched, setSlugTouched] = useState(false);
  const { handleSave: saveForm, loading } = useSaveForm();

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

    const formData: SaveFormInput = {
      name: values.name,
      slug: finalSlug,
      description: values.description,
      isArchived: values.isArchived,
      isPublished: values.isPublished,
    };

    const savedForm = await saveForm(formData);

    if (savedForm && onSave) {
      onSave(formData);
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
        value={values.description || ''}
        onChange={handleDescriptionChange}
        placeholder="Enter your description here..."
        rows={5}
      />

      <div className="form-toggles">
        <Toggle
          checked={values.isArchived || false}
          onChange={handleIsArchivedChange}
          label="Archived"
          size="sm"
          name="isArchived"
        />
        <Toggle
          checked={values.isPublished || false}
          onChange={handleIsPublishedChange}
          label="Published"
          size="sm"
          name="isPublished"
        />
      </div>

      <div className="form-actions">
        <Button
          variant="success"
          onClick={handleSave}
          disabled={!isValid || loading}
        >
          {loading ? 'SAVING...' : 'SAVE'}
        </Button>
      </div>
    </div>
  );
}
