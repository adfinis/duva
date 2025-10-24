import { Button } from '@shared/Button';
import { Input } from '@shared/Input';
import { TextArea } from '@shared/TextArea';
import { useMemo, useState } from 'react';
import './FormDetails.css';
import { useMutation } from '@apollo/client/react';
import { SaveFormDocument } from '@/gql/__generated__/graphql';

interface FormValues {
  name: string;
  slug: string;
  description: string;
}

interface FormDetailsProps {
  initialName?: string;
  initialSlug?: string;
  initialDescription?: string;
  onSave?: (data: { name: string; slug: string; description: string }) => void;
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
  onSave,
}: FormDetailsProps) {
  const [saveForm] = useMutation(SaveFormDocument);

  const [values, setValues] = useState<FormValues>({
    name: initialName,
    slug: initialSlug,
    description: initialDescription,
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

  async function handleSave() {
    if (!isValid) return;

    const finalSlug = slugTouched ? values.slug : suggestedSlug;

    const formData = {
      name: values.name,
      slug: finalSlug,
      description: values.description,
    };

    try {
      const response = await saveForm({
        variables: { input: formData },
      });

      if (onSave && response.data?.saveForm?.form) {
        onSave(formData);
      }
    } catch (err) {
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

      <div className="form-actions">
        <Button variant="success" onClick={handleSave} disabled={!isValid}>
          SAVE
        </Button>
      </div>
    </div>
  );
}
