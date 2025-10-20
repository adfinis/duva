import type React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  hoverBackgroundColor?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  backgroundColor = 'var(--color-secondary-beige)',
  textColor = 'var(--color-primary-red)',
  hoverBackgroundColor = 'var(--color-secondary-sand)',
  onClick,
  className = '',
}) => {
  const buttonStyle = {
    backgroundColor,
    color: textColor,
    '--hover-bg': hoverBackgroundColor,
  } as React.CSSProperties;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`button ${className}`}
      style={buttonStyle}
    >
      {text}
    </button>
  );
};

export default Button;
