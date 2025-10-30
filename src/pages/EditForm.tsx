import { useQuery } from '@apollo/client/react';
import { useParams } from 'react-router-dom';
import { QuestionList } from '@/components/features/forms/components/QuestionList';
import { FormDetails } from '@/components/features/forms/FormDetails';
import { GetFormDocument } from '@/gql/__generated__/graphql';
import './EditForm.css';

export function EditForm() {
  const { slug } = useParams<{ slug: string }>();

  const { data } = useQuery(GetFormDocument, {
    variables: { slug: slug || '' },
    skip: !slug,
  });

  const form = data?.allForms?.edges?.[0]?.node;

  return (
    <>
      <div className="edit-form-header">
        <h1>Edit Form: {form?.name}</h1>
      </div>

      <div className="edit-form-content">
        <div className="edit-form-left">
          <h2>Form Settings</h2>
          {form && (
            <FormDetails
              initialValues={{
                slug: form.slug,
                name: form.name,
                description: form.description || '',
                isArchived: form.isArchived || false,
                isPublished: form.isPublished || false,
              }}
            />
          )}
        </div>

        <div className="edit-form-right">
          <h2>Form Questions</h2>
          <QuestionList />
        </div>
      </div>
    </>
  );
}
