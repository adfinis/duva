import type React from 'react';
import './Button.css';

export type ButtonVariant = 'solid' | 'outline';
export type ButtonTone = 'neutral' | 'success' | 'danger' | 'warning';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  tone?: ButtonTone;
  size?: ButtonSize;
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = 'solid',
  tone = 'neutral',
  size = 'md',
  onClick,
  className = '',
}: ButtonProps) {
  const buttonClasses = [
    `btn`,
    `btn--${variant}`,
    `btn--${tone}`,
    size !== 'md' && `btn--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" onClick={onClick} className={buttonClasses}>
      <span className="btn__text">{children}</span>
    </button>
  );
}
