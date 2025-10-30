import { Button } from '@shared/Button';
import { IconButton } from '@shared/IconButton';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/shared/Card';
import './Forms.css';
import { CreateIcon } from '@icons';
import type { ChangeEvent } from 'react';
import {
  type FilterCategory,
  useGetAllForms,
} from '@/components/features/forms/hooks/useGetAllForms';

const FILTER_CATEGORIES: Array<{ value: FilterCategory; label: string }> = [
  { value: 'active', label: 'Active' },
  { value: 'archived', label: 'Archived' },
  { value: 'published', label: 'Published' },
  { value: 'all', label: 'All' },
];

export function Forms() {
  const navigate = useNavigate();
  const {
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
  } = useGetAllForms();

  const handleBackClick = () => {
    navigate('/');
  };

  const handleAddFormClick = () => {
    navigate('/forms/create');
  };

  const handleEditClick = (slug: string) => {
    navigate(`/forms/${slug}/edit`);
  };

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(e.target.value);
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
            onChange={onSearchChange}
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
        <p className="text-md-bold">Total Forms: {totalCount}</p>
      </div>

      {/* Forms List */}
      <div className="forms-cards-container">
        {forms.map((edge) => {
          const node = edge?.node;
          if (!node) return null;

          return (
            <Card key={node.id} hoverable={false} className="form-card">
              <div className="form-card-content">
                <h3>{node.name}</h3>
                <p className="text-description">
                  {node.description || 'No description available'}
                </p>
              </div>

              <div className="form-card-right">
                <div className="form-card-status">
                  <span
                    className={`text-description status-badge ${getStatusClass(
                      node.isPublished,
                      node.isArchived,
                    )}`}
                  >
                    {getStatusText(node.isPublished, node.isArchived)}
                  </span>
                </div>
                <div className="form-card-actions">
                  <IconButton
                    icon={<CreateIcon />}
                    onClick={() => handleEditClick(node.slug)}
                  />
                </div>
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
