import { Button } from '@shared/Button';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import './Forms.css';

interface Form {
  id: number;
  title: string;
  description: string;
  status: 'Draft' | 'Published' | 'Archived';
  createdAt: string;
  submissions: number;
}

export function Forms() {
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
        <Button onClick={handleBackClick}>Back to Dashboard</Button>
        <h1>Forms</h1>
        <Button variant="outline">Add New Form</Button>
      </div>
      <div className="forms-content">
        <div className="forms-summary">
          <p className="forms-count">Total Forms: {mockForms.length}</p>
        </div>
        <div className="forms-cards-container">
          {mockForms.map((form) => (
            <Card key={form.id} className="form-card">
              <div className="form-card-content">
                <h3>{form.title}</h3>
                <p className="form-card-description">{form.description}</p>
              </div>
              <div className="form-card-status">
                <span className={`status-badge ${getStatusClass(form.status)}`}>
                  {form.status}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
