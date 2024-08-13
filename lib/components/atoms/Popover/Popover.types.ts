export type PopoverPositionY = "top" | "bottom";
export type PopoverPositionX = "right" | "left";

export interface PopoverProps {
  content: React.ReactNode | React.ReactNode[];
  trigger: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  onClose?: () => void;
  onOpen?: () => void;
  placement?: PopoverPositionY | PopoverPositionX;
  sizeAsTrigger?: boolean;
}
