import { useMutation } from '@apollo/client/react';
import { useNotifications } from '@/components/shared/Notification';
import {
  SaveFormDocument,
  type SaveFormInput,
} from '@/gql/__generated__/graphql';

export function useSaveForm() {
  const [saveFormMutation, { loading }] = useMutation(SaveFormDocument);
  const { addNotification } = useNotifications();

  async function handleSave(input: SaveFormInput) {
    try {
      const result = await saveFormMutation({ variables: { input } });
      const savedForm = result.data?.saveForm?.form;

      addNotification({
        type: 'success',
        title: 'Form saved successfully',
      });

      return savedForm;
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Failed to save form',
        message: (error as Error).message,
      });
      return null;
    }
  }

  return { handleSave, loading };
}
