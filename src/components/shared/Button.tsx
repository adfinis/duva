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
}

export function Button({
  children,
  variant = 'neutral',
  size = 'md',
  onClick,
  className = '',
}: ButtonProps) {
  const buttonClasses = [
    `btn`,
    `btn--${variant}`,
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
