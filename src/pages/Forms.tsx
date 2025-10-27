import { useQuery } from '@apollo/client/react';
import { Button } from '@shared/Button';
import { useNavigate } from 'react-router-dom';
import { GetAllFormsDocument } from '@/gql/__generated__/graphql';
import { Card } from '../components/shared/Card';
import './Forms.css';

interface Form {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  submissions: number;
  isArchived?: boolean;
  isPublished?: boolean;
}

export function Forms() {
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GetAllFormsDocument, {
    fetchPolicy: 'cache-and-network',
  });

  // Mock data for forms
  const mockForms: Form[] = [
    {
      id: 1,
      title: 'User Registration Form',
      description: 'Form for new user registration and account setup',
      isPublished: true,
      createdAt: '2024-01-15',
      submissions: 142,
    },
    {
      id: 2,
      title: 'Customer Feedback Survey',
      description: 'Collecting customer satisfaction and feedback',
      isPublished: true,
      createdAt: '2024-01-20',
      submissions: 89,
    },
    {
      id: 3,
      title: 'Event Registration',
      description: 'Registration form for upcoming company events',
      createdAt: '2024-01-25',
      submissions: 0,
    },
    {
      id: 4,
      title: 'Employee Onboarding',
      description: 'New employee information and documentation',
      isPublished: true,
      createdAt: '2024-01-10',
      submissions: 23,
    },
    {
      id: 5,
      title: 'Product Order Form',
      description: 'Form for placing product orders and requests',
      isArchived: true,
      createdAt: '2024-01-05',
      submissions: 67,
    },
    {
      id: 6,
      title: 'Support Ticket Form',
      description: 'Customer support and technical assistance requests',
      isPublished: true,
      createdAt: '2024-01-18',
      submissions: 156,
    },
  ];

  const handleBackClick = () => {
    navigate('/');
  };

  const handleAddFormClick = () => {
    navigate('/forms/create');
  };

  const getStatusClass = (isPublished: boolean, isArchived: boolean) => {
    if (isArchived) return 'status-archived';
    if (isPublished) return 'status-published';
    return 'status-draft';
  };

  const getStatusText = (isPublished: boolean, isArchived: boolean) => {
    if (isArchived) return 'Archived';
    if (isPublished) return 'Published';
    return 'Draft';
  };

  if (loading) {
    return (
      <>
        <div className="forms-header">
          <Button onClick={handleBackClick}>Back to Dashboard</Button>
          <h1>Forms</h1>
          <Button variant="success">Add New Form</Button>
        </div>
        <div>Loading forms...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="forms-header">
          <Button onClick={handleBackClick}>Back to Dashboard</Button>
          <h1>Forms</h1>
          <Button variant="success">Add New Form</Button>
        </div>
        <div>Error loading forms: {error.message}</div>
      </>
    );
  }

  const forms = data?.allForms?.edges || [];

  return (
    <>
      <div className="forms-header">
        <Button onClick={handleBackClick}>Back to Dashboard</Button>
        <h1>Forms</h1>
        <Button variant="success" onClick={handleAddFormClick}>
          Add New Form
        </Button>
      </div>
      <div className="forms-summary">
        <p className="forms-count">
          Total Forms: {mockForms.length + (data?.allForms?.totalCount ?? 0)}
        </p>
      </div>
      <div className="forms-cards-container">
        {mockForms.map((form) => (
          <Card key={form.id} className="form-card">
            <div className="form-card-content">
              <h3>{form.title}</h3>
              <p className="form-card-description">{form.description}</p>
            </div>
            <div className="form-card-status">
              <span
                className={`status-badge ${getStatusClass(form.isPublished || false, form.isArchived || false)}`}
              >
                {getStatusText(
                  form.isPublished || false,
                  form.isArchived || false,
                )}
              </span>
            </div>
          </Card>
        ))}
        {forms.map((edge) => {
          const node = edge?.node;
          if (!node) return null;

          return (
            <Card key={node.id} className="form-card">
              <div className="form-card-content">
                <h3>{node.name}</h3>
                <p className="form-card-description">
                  {node.description || 'No description available'}
                </p>
              </div>
              <div className="form-card-status">
                <span
                  className={`status-badge ${getStatusClass(
                    node.isPublished,
                    node.isArchived,
                  )}`}
                >
                  {getStatusText(node.isPublished, node.isArchived)}
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
