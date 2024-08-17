import { useCallback, useEffect, useState } from "react";

export function usePagination(params?: { total?: number; limit?: number }) {
  const [pagination, setPagination] = useState<{ skip: number; limit: number }>(
    {
      limit: params?.limit ?? 10,
      skip: 0,
    }
  );

  const [pages, setPages] = useState<number>();

  const [currentPage, setCurrentPage] = useState<number>();

  const onChangePage = useCallback((page: number) => {
    setPagination((prev) => ({
      limit: prev.limit,
      skip: (page - 1) * prev.limit,
    }));
  }, []);

  const onNextPage = useCallback(() => {
    setPagination((prev) => ({
      limit: prev.limit,
      skip: prev.skip + prev.limit,
    }));
  }, []);

  const onPreviousPage = useCallback(() => {
    setPagination((prev) => ({
      limit: prev.limit,
      skip: prev.skip < prev.limit ? prev.skip : prev.skip - prev.limit,
    }));
  }, []);

  /**
   * Calculate total pages
   */
  useEffect(() => {
    setPages(Math.ceil((params?.total ?? 0) / pagination.limit));
  }, [pagination.limit, params?.total]);

  /**
   * Calculate current page
   */
  useEffect(() => {
    setCurrentPage(Math.floor(pagination.skip / pagination.limit) + 1);
  }, [pagination.limit, pagination.skip]);

  return {
    currentPage,
    pagination,
    pages,
    onChangePage,
    onNextPage,
    onPreviousPage,
  };
}
