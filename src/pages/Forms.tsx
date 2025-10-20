import type React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@shared/Button';
import './Forms.css';

interface Form {
  id: number;
  title: string;
  description: string;
  status: 'Draft' | 'Published' | 'Archived';
  createdAt: string;
  submissions: number;
}

const Forms: React.FC = () => {
  const navigate = useNavigate();

  // Mock data for forms
  const mockForms: Form[] = [
    {
      id: 1,
      title: 'User Registration Form',
      description: 'Form for new user registration and account setup',
      status: 'Published',
      createdAt: '2024-01-15',
      submissions: 142,
    },
    {
      id: 2,
      title: 'Customer Feedback Survey',
      description: 'Collecting customer satisfaction and feedback',
      status: 'Published',
      createdAt: '2024-01-20',
      submissions: 89,
    },
    {
      id: 3,
      title: 'Event Registration',
      description: 'Registration form for upcoming company events',
      status: 'Draft',
      createdAt: '2024-01-25',
      submissions: 0,
    },
    {
      id: 4,
      title: 'Employee Onboarding',
      description: 'New employee information and documentation',
      status: 'Published',
      createdAt: '2024-01-10',
      submissions: 23,
    },
    {
      id: 5,
      title: 'Product Order Form',
      description: 'Form for placing product orders and requests',
      status: 'Archived',
      createdAt: '2024-01-05',
      submissions: 67,
    },
    {
      id: 6,
      title: 'Support Ticket Form',
      description: 'Customer support and technical assistance requests',
      status: 'Published',
      createdAt: '2024-01-18',
      submissions: 156,
    },
  ];

  const handleBackClick = () => {
    navigate('/');
  };

  const handleAddFormClick = () => {
    // Navigate to add form page when implemented
    console.log('Navigate to Add New Form');
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Published':
        return 'status-published';
      case 'Draft':
        return 'status-draft';
      case 'Archived':
        return 'status-archived';
      default:
        return '';
    }
  };

  return (
    <div className="forms-container">
      <div className="forms-header">
        <Button
          text="← Back to Dashboard"
          backgroundColor="var(--color-primary-red)"
          textColor="var(--color-primary-white)"
          onClick={handleBackClick}
        />
        <h1 className="forms-title">Forms</h1>
        <Button
          text="+ Add New Form"
          backgroundColor="var(--color-secondary-green)"
          textColor="var(--color-primary-white)"
          onClick={handleAddFormClick}
        />
      </div>
      <div className="forms-content">
        <div className="forms-summary">
          <p className="forms-count">Total Forms: {mockForms.length}</p>
        </div>
        <div className="table-container">
          <table className="forms-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockForms.map((form) => (
                <tr key={form.id}>
                  <td className="form-title">{form.title}</td>
                  <td className="form-description">{form.description}</td>
                  <td>
                    <span
                      className={`status-badge ${getStatusClass(form.status)}`}
                    >
                      {form.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Forms;
