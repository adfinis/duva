import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

export function Dashboard() {
  const navigate = useNavigate();

  const handleFormsClick = () => {
    navigate('/forms');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-column">
        <button
          type="button"
          onClick={handleFormsClick}
          className="dashboard-button forms-button"
        >
          FORMS
        </button>
      </div>
      <div className="dashboard-column">
        <button type="button" className="dashboard-button data-button">
          DATA
        </button>
      </div>
      <div className="dashboard-column">
        <button type="button" className="dashboard-button data-button">
          ADMIN DASHBOARD
        </button>
      </div>
    </div>
  );
}
