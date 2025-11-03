import { useMutation } from '@apollo/client/react';
import { ReorderFormQuestionsDocument } from '@/gql/__generated__/graphql';

export function useReorderQuestions() {
  const [reorderMutation, { loading, error }] = useMutation(
    ReorderFormQuestionsDocument,
  );

  async function reorderQuestions(formSlug: string, questionIds: string[]) {
    return await reorderMutation({
      variables: {
        input: {
          form: formSlug,
          questions: questionIds,
        },
      },
    });
  }

  return {
    reorderQuestions,
    loading,
    error,
  };
}
