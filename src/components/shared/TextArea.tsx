import type React from 'react';
import './TextArea.css';

interface TextAreaProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  id?: string;
  name?: string;
  className?: string;
}

export function TextArea({
  label,
  value,
  onChange,
  placeholder = 'Enter your text here...',
  rows = 7,
  id = 'text-area-title',
  name,
  className = '',
}: TextAreaProps) {
  return (
    <div className="text-area">
      {label && (
        <label htmlFor={id} className="text-area-label">
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        className={`text-area-input ${className}`}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}