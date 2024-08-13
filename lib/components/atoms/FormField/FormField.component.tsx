import { FormFieldProps } from "./FormField.types";
import styles from "./FormField.module.css";

export const FormField = ({
  children,
  className,
  direction = "column",
}: FormFieldProps) => {
  return (
    <div
      className={`${styles.container} ${styles[`container--direction-${direction}`]} ${className || ""}`}
    >
      {children}
    </div>
  );
};
