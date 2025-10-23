import './CreateForm.css';
import { Button } from '../components/shared/Button';
import { useNavigate } from 'react-router-dom';
import { FormDetails } from '../components/FormDetails';


export function CreateForm() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/forms');
  };

  return (
    <div className="create-form-container">
      <div className="create-form-header">
        <Button onClick={handleBackClick}>Back to Dashboard</Button>
        <h1>Create Form</h1>
        <FormDetails />
      </div>
    </div>
  );
}