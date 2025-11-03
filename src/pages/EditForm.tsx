import { useQuery } from '@apollo/client/react';
import { useParams } from 'react-router-dom';
import { FormDetails } from '@/components/features/forms/components/FormDetails';
import { FormQuestionsList } from '@/components/features/questions/components/FormQuestionsList';
import { GetFormDocument } from '@/gql/__generated__/graphql';
import './EditForm.css';
import { Button } from '@/components/shared/Button';

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
      {form && (
        <div className="edit-form-content">
          <div className="edit-form-left">
            <h2>Form Settings</h2>

            <FormDetails
              initialValues={{
                slug: form.slug,
                name: form.name,
                description: form.description || '',
                isArchived: form.isArchived || false,
                isPublished: form.isPublished || false,
              }}
            />
          </div>

          <div className="edit-form-right">
            <div>
              <Button variant="outline" size="sm">
                +
              </Button>
            </div>
            <div className="edit-form-right-questions">
              <FormQuestionsList formSlug={form.slug} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
