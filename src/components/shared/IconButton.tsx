import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from 'react';
import './IconButton.css';

export type IconButtonSize = 'sm' | 'md' | 'lg';
export type IconButtonColor =
  | 'black'
  | 'red'
  | 'green'
  | 'anthracite'
  | 'white';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  size?: IconButtonSize;
  color?: IconButtonColor;
  disabled?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { icon, size = 'md', color, className = '', disabled = false, ...props },
    ref,
  ) => {
    const buttonClasses = [
      'icon-btn',
      `icon-btn--${size}`,
      color && `icon-btn--${color}`,
      disabled && 'icon-btn--disabled',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type="button"
        className={buttonClasses}
        disabled={disabled}
        {...props}
      >
        {icon}
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';
