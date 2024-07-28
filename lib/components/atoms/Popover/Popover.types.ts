export type PopoverPositionY = "top" | "bottom";
export type PopoverPositionX = "right" | "left";

export interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  trigger: React.ReactNode;
  content: React.ReactNode | React.ReactNode[];
  className?: string;
  placement?: PopoverPositionY | PopoverPositionX;
  sizeAsTrigger?: boolean;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
}
