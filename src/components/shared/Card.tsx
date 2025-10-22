import type React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ 
  children, 
  className = '', 
  hoverable = true 
}: CardProps) {
  return (
    <div className={`card ${hoverable ? 'card-hoverable' : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}

