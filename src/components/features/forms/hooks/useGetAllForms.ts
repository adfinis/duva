import { useQuery } from '@apollo/client/react';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  AscDesc,
  type FormFilterSetType,
  GetAllFormsDocument,
  SortableFormAttributes,
} from '@/gql/__generated__/graphql';

export type FilterCategory = 'active' | 'archived' | 'published' | 'all';

const PAGE_SIZE = 10;

export function useGetAllForms() {
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
    const filters: FormFilterSetType[] = [];

    if (category === 'active') {
      filters.push({ isArchived: false });
    } else if (category === 'archived') {
      filters.push({ isArchived: true });
    } else if (category === 'published') {
      filters.push({ isPublished: true });
    }

    if (debouncedSearch) {
      filters.push({ search: debouncedSearch });
    }

    return filters.length > 0 ? filters : undefined;
  }, [category, debouncedSearch]);

  const { data, loading, error } = useQuery(GetAllFormsDocument, {
    variables: {
      filter: buildFilter(),
      order: [
        { attribute: SortableFormAttributes.Name, direction: AscDesc.Asc },
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

  const forms = data?.allForms?.edges || [];
  const totalCount = data?.allForms?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  return {
    forms,
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
  };
}
