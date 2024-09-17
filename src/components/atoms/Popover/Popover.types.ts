export enum PopoverPosition {
  top = "top",
  bottom = "bottom",
  left = "left",
  right = "right",
}

export interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  contentClassName?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  position?: keyof typeof PopoverPosition;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  sizeAsTrigger?: boolean;
  withContentStyles?: boolean;
}
