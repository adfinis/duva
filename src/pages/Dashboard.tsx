import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleFormsClick = () => {
    navigate('/forms');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-column">
        <button
          onClick={handleFormsClick}
          className="dashboard-button forms-button"
        >
          FORMS
        </button>
      </div>
      <div className="dashboard-column">
        <button
          className="dashboard-button data-button"
        >
          DATA
        </button>
      </div>
      <div className="dashboard-column">
        <button
          className="dashboard-button data-button"
        >
          ADMIN DASHBOARD
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
