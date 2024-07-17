export interface DrawerProps {
  children: React.ReactNode | React.ReactNode[];
  isOpen: boolean;
  onClose: () => void;
  footer?: React.ReactNode | React.ReactNode[];
  header?: React.ReactNode | React.ReactNode[];
  placement?: "top" | "right" | "bottom" | "left";
  size?: "s" | "m" | "l" | "xl" | "full";
}
