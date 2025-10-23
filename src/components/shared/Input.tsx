import type React from 'react';
import './Input.css';

export type InputVariant = 'solid' | 'outline';
export type InputTone = 'neutral' | 'success' | 'danger' | 'warning';
export type InputSize = 'sm' | 'md' | 'lg';

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: InputVariant;
  tone?: InputTone;
  size?: InputSize;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  name?: string;
  id?: string;
}

export function Input({
  value,
  onChange,
  variant = 'outline',
  tone = 'neutral',
  size = 'md',
  type = 'text',
  placeholder,
  disabled = false,
  className = '',
  name,
  id,
}: InputProps) {
  const inputClasses = [
    `input`,
    `input--${variant}`,
    `input--${tone}`,
    size !== 'md' && `input--${size}`,
    disabled && 'input--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={inputClasses}
      name={name}
      id={id}
    />
  );
}

