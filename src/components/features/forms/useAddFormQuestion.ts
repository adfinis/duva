import { useMutation } from '@apollo/client/react';
import {
  AddFormQuestionDocument,
  type AddFormQuestionInput,
} from '@/gql/__generated__/graphql';

export function useAddFormQuestion() {
  const [addFormQuestionMutation, { loading }] = useMutation(
    AddFormQuestionDocument,
  );

  async function addFormQuestion(input: AddFormQuestionInput) {
    const result = await addFormQuestionMutation({ variables: { input } });
    return result.data?.addFormQuestion?.form;
  }

  return { addFormQuestion, loading };
}
