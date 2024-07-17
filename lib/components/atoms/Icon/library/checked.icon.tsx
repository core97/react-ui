import { IconSvgProps } from "../Icon.types";

export function Checked({ color, size }: IconSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      fill={color}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
        d="m5 14l3.233 2.425a1 1 0 0 0 1.374-.167L18 6"
      />
    </svg>
  );
}
