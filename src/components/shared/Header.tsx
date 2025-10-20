import type React from 'react';
import './Header.css';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
  rightElement?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  onBackClick,
  rightElement,
}) => {
  return (
    <header className="header">
      <div className="header-content">
        {showBackButton && (
          <button
            type="button"
            className="header-back-button"
            onClick={onBackClick}
            aria-label="Go back"
          >
            ←
          </button>
        )}

        <h1 className="header-title">{title}</h1>

        {rightElement && <div className="header-right">{rightElement}</div>}
      </div>
    </header>
  );
};

export default Header;
