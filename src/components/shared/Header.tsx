import type React from 'react';
import './Header.css';
import { DuvaLogoSimple, FreiburgLogo } from '@icons';
import { Button } from './Button';

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
        <FreiburgLogo className="header-logo-stamp" aria-label="Freiburg" />

        {showBackButton && <Button onClick={onBackClick}>←</Button>}

        <DuvaLogoSimple className="header-logo" aria-label={title} />

        {rightElement && <div className="header-right">{rightElement}</div>}
      </div>
    </header>
  );
};

export default Header;
