import { IconSvgProps } from "../Icon.types";

export function ArrowUp({ className, size }: IconSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      className={className}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M12 20V4m0 0l6 6m-6-6l-6 6"
      />
    </svg>
  );
}
