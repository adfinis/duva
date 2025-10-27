import { useQuery } from '@apollo/client/react';
import { Button } from '@shared/Button';
import { useNavigate } from 'react-router-dom';
import { GetAllFormsDocument } from '@/gql/__generated__/graphql';
import { Card } from '../components/shared/Card';
import './Forms.css';

export function Forms() {
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GetAllFormsDocument, {
    fetchPolicy: 'cache-and-network',
  });

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
          Total Forms: {data?.allForms?.totalCount ?? 0}
        </p>
      </div>
      <div className="forms-cards-container">
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
