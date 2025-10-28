import { useQuery } from '@apollo/client/react';
import { Button } from '@shared/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  AscDesc,
  type FormFilterSetType,
  GetAllFormsDocument,
  SortableFormAttributes,
} from '@/gql/__generated__/graphql';
import { Card } from '../components/shared/Card';
import './Forms.css';
import { type ChangeEvent, useCallback, useEffect, useState } from 'react';

type FilterCategory = 'active' | 'archived' | 'published' | 'all';
const FILTER_CATEGORIES = [
  { value: 'active', label: 'Active' },
  { value: 'archived', label: 'Archived' },
  { value: 'published', label: 'Published' },
  { value: 'all', label: 'All' },
];

const PAGE_SIZE = 10;

export function Forms() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState<FilterCategory>(
    (searchParams.get('category') as FilterCategory) || 'all',
  );
  const [searchText, setSearchText] = useState(
    searchParams.get('search') || '',
  );
  const [debouncedSearch, setDebouncedSearch] = useState(searchText);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(
    Number.parseInt(searchParams.get('page') || '1', 10),
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

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

  const handleBackClick = () => {
    navigate('/');
  };

  const handleAddFormClick = () => {
    navigate('/forms/create');
  };

  const handleCategoryChange = (newCategory: FilterCategory) => {
    setCategory(newCategory);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };

  const toPage = (page: number) => {
    setCurrentPage(page);
  };

  const getStatusClass = (isPublished: boolean, isArchived: boolean) => {
    if (isArchived) return 'status-archived';
    if (isPublished) return 'status-published';
    return 'status-draft';
  };

  const getStatusText = (isPublished: boolean, isArchived: boolean) => {
    if (isArchived) return 'Archived';
    if (isPublished) return 'Published';
    return 'Draft';
  };

  if (loading) {
    return (
      <>
        <div className="forms-header">
          <Button onClick={handleBackClick}>Back to Dashboard</Button>
          <h1>Forms</h1>
          <Button variant="success">Add New Form</Button>
        </div>
        <div>Loading forms...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="forms-header">
          <Button onClick={handleBackClick}>Back to Dashboard</Button>
          <h1>Forms</h1>
          <Button variant="success">Add New Form</Button>
        </div>
        <div>Error loading forms: {error.message}</div>
      </>
    );
  }

  const forms = data?.allForms?.edges || [];
  const totalCount = data?.allForms?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxButtons = 7;

    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <>
      <div className="forms-header">
        <Button variant="outline" onClick={handleBackClick}>
          Back to Dashboard
        </Button>
        <h1>Forms</h1>
        <Button variant="success" onClick={handleAddFormClick}>
          Add New Form
        </Button>
      </div>

      {/* Filter Buttons */}
      <div className="forms-filters">
        {/* Search Input */}
        <div className="search-container">
          <input
            type="search"
            className="search-input text-xs"
            placeholder="Search forms..."
            value={searchText}
            onChange={handleSearchChange}
            aria-label="Search forms"
          />
        </div>

        <div className="filter-buttons">
          {FILTER_CATEGORIES.map((cat) => (
            <Button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value as FilterCategory)}
              className={category === cat.value ? 'active' : ''}
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="forms-summary">
        <p className="forms-count">Total Forms: {totalCount}</p>
      </div>

      {/* Forms List */}
      <div className="forms-cards-container">
        {forms.map((edge) => {
          const node = edge?.node;
          if (!node) return null;

          return (
            <Card key={node.id} className="form-card">
              <div className="form-card-content">
                <h3>{node.name}</h3>
                <p className="form-card-description">
                  {node.description || 'No description available'}
                </p>
              </div>
              <div className="form-card-status">
                <span
                  className={`status-badge ${getStatusClass(
                    node.isPublished,
                    node.isArchived,
                  )}`}
                >
                  {getStatusText(node.isPublished, node.isArchived)}
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination-container">
          <Button
            onClick={() => toPage(currentPage - 1)}
            disabled={currentPage === 1 || loading}
            variant="outline"
            className="pagination-button"
          >
            Previous
          </Button>

          <div className="pagination-numbers">
            {getPageNumbers().map((page, index, array) => {
              if (page === '...') {
                // Create contextual key based on position
                // First ellipsis appears after page 1, second before last page
                const key =
                  index < array.length / 2 ? 'ellipsis-start' : 'ellipsis-end';
                return (
                  <span key={key} className="pagination-ellipsis">
                    ...
                  </span>
                );
              }

              return (
                <Button
                  key={page}
                  onClick={() => toPage(page as number)}
                  disabled={loading}
                  className={`pagination-number ${
                    currentPage === page ? 'active' : ''
                  }`}
                >
                  {page}
                </Button>
              );
            })}
          </div>

          <Button
            onClick={() => toPage(currentPage + 1)}
            disabled={currentPage >= totalPages || loading}
            variant="outline"
            className="pagination-button"
          >
            Next
          </Button>
        </div>
      )}

      {/* Empty State */}
      {!loading && forms.length === 0 && (
        <div className="empty-state">
          <p className="text-xl-bold">No forms found.</p>
        </div>
      )}
    </>
  );
}
