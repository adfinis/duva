import { useState } from 'react';
import { Input } from './shared/Input';
import { Button } from './shared/Button';
import './FormDetails.css';
import { TextArea } from './shared/TextArea';

interface FormDetailsProps {
  initialName?: string;
  initialSlug?: string;
  initialDescription?: string;
  onSave?: (data: { name: string; slug: string; description: string }) => void;
}

export function FormDetails({
  initialName = '',
  initialSlug = '',
  initialDescription = '',
  onSave,
}: FormDetailsProps) {
  const [name, setName] = useState(initialName);
  const [slug, setSlug] = useState(initialSlug);
  const [description, setDescription] = useState(initialDescription);

  const handleSave = () => {
    if (onSave) {
      onSave({ name, slug, description });
    }
  };

  return (
    <div className="form-details">
      <div className="form-field">
        <label htmlFor="name" className="form-label">
          Name <span className="required">*</span>
        </label>
        <Input
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder=""
        />
      </div>

      <div className="form-field">
        <label htmlFor="slug" className="form-label">
          Slug <span className="required">*</span>
        </label>
        <Input
          id="slug"
          name="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder=""
        />
      </div>

      <TextArea 
        label="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Enter your description here..." 
        rows={5}
      />

      <div className="form-actions">
        <Button tone="success" onClick={handleSave}>
          SAVE
        </Button>
      </div>
    </div>
  );
}

