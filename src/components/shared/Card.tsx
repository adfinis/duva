import type React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  onClick,
  hoverable = true 
}) => {
  const cardClasses = `card ${hoverable ? 'card-hoverable' : ''} ${className}`.trim();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (onClick && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick();
    }
  };

  if (onClick) {
    return (
      <button 
        className={cardClasses} 
        onClick={onClick}
        onKeyDown={handleKeyDown}
        type="button"
      >
        {children}
      </button>
    );
  }

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;
