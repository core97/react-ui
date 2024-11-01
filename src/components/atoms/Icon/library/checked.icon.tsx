import { IconSvgProps } from "../Icon.types";

export function Checked({ className, size }: IconSvgProps) {
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
        strokeLinecap="round"
        strokeWidth="2"
        d="m5 14l3.233 2.425a1 1 0 0 0 1.374-.167L18 6"
      />
    </svg>
  );
}
