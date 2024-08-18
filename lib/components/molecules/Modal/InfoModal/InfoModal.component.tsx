import { Text } from "../../../atoms/Text";
import { Button } from "../../../atoms/Button";
import { InfoModalProps } from "./InfoModal.types";
import styles from "./InfoModal.module.css";

export const InfoModal = ({
  title,
  children,
  primaryButton,
  secondaryButton,
}: InfoModalProps) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Text size="xl" as="h2" weight="600">
          {title}
        </Text>
      </header>
      <main>{children}</main>
      {Boolean(primaryButton || secondaryButton) && (
        <footer className={styles.footer}>
          {secondaryButton && (
            <Button {...secondaryButton} variant="outline">
              {secondaryButton.label}
            </Button>
          )}
          {primaryButton && (
            <Button {...primaryButton}>{primaryButton.label}</Button>
          )}
        </footer>
      )}
    </div>
  );
};
