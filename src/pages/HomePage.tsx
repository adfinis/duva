import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import { DuvaLogo } from '@/assets/icons';
import { Button } from '@/components/shared/Button';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <DuvaLogo className="home-logo" aria-label="DUVA" />

      <div className="home-hero">
        <h3 className="home-title">
          Das moderne Informationsmanagement-System für Ihre Organisation
        </h3>
        <p className="home-description">
          DUVA ist ein leistungsstarkes Workflow-System zum Erstellen,
          Veröffentlichen und Teilen von Formularen. Verwalten Sie Ihre Daten
          effizient und arbeiten Sie nahtlos mit Ihrem Team zusammen.
        </p>
        <div className="home-actions">
          <Button variant="danger" onClick={() => navigate('/forms')}>
            Zu den Formularen
          </Button>
          <Button variant="outline" onClick={() => navigate('/dashboard')}>
            Dashboard öffnen
          </Button>
        </div>
      </div>
      <div className="home-features">
        <div className="feature-card">
          <h3>Formulare erstellen</h3>
          <p>
            Erstellen Sie komplexe Formulare mit einer intuitiven
            Benutzeroberfläche
          </p>
        </div>
        <div className="feature-card">
          <h3>Workflows verwalten</h3>
          <p>
            Definieren Sie Arbeitsabläufe und automatisieren Sie Ihre Prozesse
          </p>
        </div>
        <div className="feature-card">
          <h3>Zusammenarbeit</h3>
          <p>
            Teilen Sie Formulare und arbeiten Sie gemeinsam an Ihren Projekten
          </p>
        </div>
      </div>
    </div>
  );
}
