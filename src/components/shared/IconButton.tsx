import type { ReactNode } from 'react';
import './IconButton.css';

export type IconButtonSize = 'sm' | 'md' | 'lg';
export type IconButtonColor =
  | 'black'
  | 'red'
  | 'green'
  | 'anthracite'
  | 'white';

interface IconButtonProps {
  icon: ReactNode;
  size?: IconButtonSize;
  color?: IconButtonColor;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function IconButton({
  icon,
  size = 'md',
  color,
  onClick,
  className = '',
  disabled = false,
}: IconButtonProps) {
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
      type="button"
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {icon}
    </button>
  );
}
