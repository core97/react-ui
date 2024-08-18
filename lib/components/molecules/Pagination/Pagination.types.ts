import { ButtonProps } from "../../atoms/Button";

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onChangePage: (page: number) => void;
  onNextPage?: () => void;
  onPreviousPage?: () => void;
  options?: {
    nextButtonLabel?: string;
    previousButtonLabel?: string;
  };
  size?: ButtonProps["size"];
}
