import { Drawer } from "../Drawer";
import { SidebarProps } from "./Sidebar.types";
import styles from "./Sidebar.module.css";

export const Sidebar = ({
  navigation,
  children,
  className,
  isOpenDrawer,
  onCloseDrawer,
}: SidebarProps) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>
      {typeof isOpenDrawer === "boolean" && onCloseDrawer && (
        <Drawer isOpen={isOpenDrawer} onClose={onCloseDrawer}>
          {navigation}
        </Drawer>
      )}

      <aside className={styles.navigation}>{navigation}</aside>

      <main className={styles.content}>{children}</main>
    </div>
  );
};
