import { useQuery } from '@apollo/client/react';
import { GetFormQuestionsDocument } from '@/gql/__generated__/graphql';

export function useGetFormQuestions(formSlug: string) {
  const { data, loading, error, refetch } = useQuery(GetFormQuestionsDocument, {
    variables: {
      slug: formSlug,
    },
    fetchPolicy: 'cache-and-network',
  });

  const form = data?.allForms?.edges?.[0]?.node;
  const questions =
    form?.questions?.edges
      ?.map((edge) => edge?.node)
      ?.filter((node): node is NonNullable<typeof node> => node !== null) ?? [];

  return {
    form,
    questions,
    loading,
    error,
    refetch,
  };
}
