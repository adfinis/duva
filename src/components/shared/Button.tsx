import type React from 'react';
import './Button.css';

export type ButtonVariant = 'neutral' | 'outline' | 'danger' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'neutral',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) {
  // Map button size to typography class
  const textClass = {
    sm: 'text-xs-bold',
    md: 'text-sm-bold',
    lg: 'text-md-bold',
  }[size];

  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    textClass,
    disabled && 'btn--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      <span className="btn__text">{children}</span>
    </button>
  );
}
