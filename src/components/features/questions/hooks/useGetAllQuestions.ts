import { useQuery } from '@apollo/client/react';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  AscDesc,
  GetAllQuestionsDocument,
  type QuestionFilterSetType,
  SortableQuestionAttributes,
} from '@/gql/__generated__/graphql';

export type FilterCategory = 'active' | 'archived' | 'all';

const PAGE_SIZE = 10;

export function useGetAllQuestions() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState<FilterCategory>(
    (searchParams.get('category') as FilterCategory) || 'all',
  );
  const [searchText, setSearchText] = useState(
    searchParams.get('search') || '',
  );
  const [debouncedSearch, setDebouncedSearch] = useState(searchText);
  const [currentPage, setCurrentPage] = useState(
    Number.parseInt(searchParams.get('page') || '1', 10),
  );

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  // Sync filters to URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (category !== 'all') params.set('category', category);
    if (debouncedSearch) params.set('search', debouncedSearch);
    if (currentPage > 1) params.set('page', currentPage.toString());
    setSearchParams(params, { replace: true });
  }, [category, debouncedSearch, currentPage, setSearchParams]);

  const buildFilter = useCallback(() => {
    const filters: QuestionFilterSetType[] = [];

    if (category === 'active') {
      filters.push({ isArchived: false });
    } else if (category === 'archived') {
      filters.push({ isArchived: true });
    }

    if (debouncedSearch) {
      filters.push({ search: debouncedSearch });
    }

    return filters.length > 0 ? filters : undefined;
  }, [category, debouncedSearch]);

  const { data, loading, error, refetch } = useQuery(GetAllQuestionsDocument, {
    variables: {
      filter: buildFilter(),
      order: [
        { attribute: SortableQuestionAttributes.Label, direction: AscDesc.Asc },
      ],
      first: PAGE_SIZE,
      offset: currentPage > 1 ? (currentPage - 1) * PAGE_SIZE : undefined,
    },
    fetchPolicy: 'cache-and-network',
  });

  const handleCategoryChange = (newCategory: FilterCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchText(value);
    setCurrentPage(1);
  };

  const toPage = (page: number) => {
    setCurrentPage(page);
  };

  const questions =
    data?.allQuestions?.edges
      ?.map((edge) => edge?.node)
      ?.filter((node): node is NonNullable<typeof node> => node !== null) ?? [];
  const totalCount = data?.allQuestions?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  return {
    questions,
    totalCount,
    totalPages,
    loading,
    error,
    currentPage,
    category,
    searchText,
    handleCategoryChange,
    handleSearchChange,
    toPage,
    refetch,
  };
}
