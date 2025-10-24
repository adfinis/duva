import type React from 'react';
import './Input.css';

interface InputProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  name?: string;
  id?: string;
}

export function Input({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  disabled = false,
  className = '',
  name,
  id,
}: InputProps) {
  return (
    <div className="input-container">
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`input ${disabled ? 'input--disabled' : ''} ${className}`}
        name={name}
        id={id}
      />
    </div>
  );
}
