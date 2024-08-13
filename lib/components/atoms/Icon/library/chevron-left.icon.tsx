import { IconSvgProps } from "../Icon.types";

export function ChevronLeft({ className, size }: IconSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      className={className}
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z" />
    </svg>
  );
}
