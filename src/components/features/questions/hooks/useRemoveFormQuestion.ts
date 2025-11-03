import { useMutation } from '@apollo/client/react';
import { RemoveFormQuestionDocument } from '@/gql/__generated__/graphql';

export function useRemoveFormQuestion() {
  const [removeFormQuestion, { loading, error }] = useMutation(
    RemoveFormQuestionDocument,
  );

  const deleteQuestion = async (formId: string, questionId: string) => {
    await removeFormQuestion({
      variables: {
        input: {
          form: formId,
          question: questionId,
        },
      },
    });
  };

  return {
    deleteQuestion,
    loading,
    error,
  };
}
