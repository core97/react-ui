import { IconSvgProps } from "../Icon.types";

export function Add({ className, size }: IconSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      height={size}
      width={size}
      className={className}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      >
        <circle cx="128" cy="128" r="112" />
        <path d="M 79.999992,128 H 176.0001" />
        <path d="m 128.00004,79.99995 v 96.0001" />
      </g>
    </svg>
  );
}
