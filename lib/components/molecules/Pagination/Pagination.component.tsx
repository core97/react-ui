import { useMemo } from "react";
import { Button } from "../../atoms/Button";
import { PaginationProps } from "./Pagination.types";
import styles from "./Pagination.module.css";

const PAGES_TO_SHOW = 5;

const PAGE_HALF_TO_SHOW = Math.floor(PAGES_TO_SHOW / 2);

export const Pagination = ({
  currentPage,
  onChangePage,
  totalPages,
  onNextPage,
  onPreviousPage,
  options,
  size = 'xs',
}: PaginationProps) => {
  const pages = useMemo(() => {
    if (totalPages <= PAGES_TO_SHOW) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }

    if (currentPage <= PAGE_HALF_TO_SHOW) {
      return Array.from({ length: PAGES_TO_SHOW }, (_, i) => i);
    }

    if (currentPage >= totalPages - PAGE_HALF_TO_SHOW) {
      return Array.from(
        { length: PAGES_TO_SHOW },
        (_, i) => totalPages - PAGES_TO_SHOW + i
      );
    }

    return Array.from(
      { length: PAGES_TO_SHOW },
      (_, i) => currentPage - PAGE_HALF_TO_SHOW + i
    );
  }, [currentPage, totalPages]);

  return (
    <ul aria-label="Page navigation" className={styles.container}>
      <li>
        <Button
          variant="outline"
          disabled={currentPage === 1}
          onClick={onPreviousPage}
          iconLeft="chevron_left"
          size={size}
          className={styles.previous_button}
        >
          {options?.previousButtonLabel || "Anterior"}
        </Button>
      </li>

      {pages.map((pageIndex) => (
        <li key={pageIndex}>
          <Button
            variant={currentPage === pageIndex ? "outline" : "ghost"}
            onClick={() => onChangePage(pageIndex + 1)}
            size={size}
          >
            {pageIndex + 1}
          </Button>
        </li>
      ))}

      <li>
        <Button
          variant="outline"
          disabled={currentPage >= totalPages}
          onClick={onNextPage}
          iconRight="chevron_right"
          size={size}
          className={styles.next_button}

        >
          {options?.nextButtonLabel || "Siguiente"}
        </Button>
      </li>
    </ul>
  );
};
