import React from 'react';
import { Pagination } from '@mui/material';

interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const PaginationComponent: React.FC<Props> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      onChange={(_, value) => onPageChange(value)}
      color="primary"
    />
  );
};
