import { useMutation } from '@apollo/client/react';
import {
  SaveOptionDocument,
  type SaveOptionInput,
} from '@/gql/__generated__/graphql';

export function useSaveOption() {
  const [saveOptionMutation, { loading }] = useMutation(SaveOptionDocument);

  async function saveOption(input: SaveOptionInput) {
    const result = await saveOptionMutation({ variables: { input } });
    return result.data?.saveOption?.option;
  }

  return { saveOption, loading };
}
