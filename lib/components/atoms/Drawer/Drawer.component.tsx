import { Button } from "../Button";
import { Icon } from "../Icon";
import { DrawerProps } from "./Drawer.types";
import styles from "./Drawer.module.css";

export const Drawer = ({
  children,
  isOpen,
  onClose,
  footer,
  header,
  placement = "left",
  size = "m",
}: DrawerProps) => {
  const modifierClassNames = [
    isOpen ? styles[`drawer--opened`] : "",
    styles[`drawer--size-${size}`],
    styles[`drawer--placement-${placement}`],
    isOpen
      ? styles[`drawer--opened-${placement}`]
      : styles[`drawer--closed-${placement}`],
  ];

  return (
    <>
      {isOpen && (
        <div className={styles["drawer__overlay"]} onClick={onClose}></div>
      )}

      <div
        role="dialog"
        aria-modal
        aria-hidden={!isOpen}
        className={`${styles.drawer}  ${modifierClassNames.join(" ")}`}
      >
        <header className={styles["drawer__header"]}>
          {Boolean(header) && header}

          <Button
            type="button"
            variant="ghost"
            size="xs"
            onClick={onClose}
            className={styles["drawer__close-btn"]}
          >
            <Icon name="close" size={20} />
          </Button>
        </header>
        <main className={styles["drawer__content"]}>{children}</main>
        {Boolean(footer) && (
          <footer className={styles["drawer__footer"]}>{footer}</footer>
        )}
      </div>
    </>
  );
};
