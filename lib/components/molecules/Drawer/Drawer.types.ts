export enum DrawerPlacement {
  top = "top",
  right = "right",
  bottom = "bottom",
  left = "left",
}

export enum DrawerSize {
  s = "s",
  m = "m",
  l = "l",
  xl = "xl",
  full = "full",
}

export interface DrawerProps {
  children: React.ReactNode | React.ReactNode[];
  isOpen: boolean;
  onClose: () => void;
  footer?: React.ReactNode | React.ReactNode[];
  header?: React.ReactNode | React.ReactNode[];
  placement?: keyof typeof DrawerPlacement;
  size?: keyof typeof DrawerSize;
}
