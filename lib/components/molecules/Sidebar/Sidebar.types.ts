export interface SidebarProps {
  navigation: React.ReactNode | React.ReactNode[];
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  isOpenDrawer?: boolean;
  onCloseDrawer?: () => void;
}
