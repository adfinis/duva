import './CreateForm.css';
import { Button } from '@shared/Button';
import { useNavigate } from 'react-router-dom';
import { FormDetails } from '@/components/features/forms/FormDetails';

export function CreateForm() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/forms');
  };

  const handleSave = () => {
    navigate('/forms');
  };

  return (
    <div className="create-form-container">
      <div className="create-form-header">
        <Button onClick={handleBackClick}>Back to Forms</Button>
        <h1>Create Form</h1>
      </div>
      <FormDetails onSave={handleSave} />
    </div>
  );
}
