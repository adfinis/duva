import './Header.css';
import { DuvaLogoSimple, FreiburgLogo, Person } from '@icons';
import { Dropdown } from '@shared/Dropdown';
import { NavItem } from '@shared/NavItem';
import { useAuth } from 'react-oidc-context';
import { Link } from 'react-router-dom';

export function Header() {
  const auth = useAuth();
  const userProfile = auth.user?.profile;

  return (
    <header className="header">
      <div className="header-content">
        <FreiburgLogo className="header-logo-stamp" aria-label="Freiburg" />
        <Link to="/" className="header-logo-link" aria-label="Go to home page">
          <DuvaLogoSimple className="header-logo" aria-label="duva-logo" />
        </Link>

        <nav className="header-nav">
          <NavItem to="/forms" text="Forms" />
          <NavItem to="/data" text="Data" />
          <NavItem to="/shared" text="Shared" />
        </nav>

        <div className="header-right">
          <Dropdown
            trigger={
              <button
                type="button"
                className="profile-button"
                aria-label="User Menu"
              >
                <Person />
              </button>
            }
          >
            <div className="profile-info">
              {userProfile?.given_name && userProfile?.family_name && (
                <div className="profile-field text-sm-bold">
                  <span>{userProfile.given_name} </span>
                  <span>{userProfile.family_name}</span>
                </div>
              )}
              {userProfile?.preferred_username && (
                <div className="profile-field text-sm">
                  <span>{userProfile.preferred_username}</span>
                </div>
              )}
            </div>

            <div className="profile-actions">
              <button className="action-button text-sm" type="button">
                Settings
              </button>
              <button
                className="action-button danger text-sm-bold"
                type="button"
                onClick={() => auth.signoutRedirect()}
              >
                Logout
              </button>
            </div>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
