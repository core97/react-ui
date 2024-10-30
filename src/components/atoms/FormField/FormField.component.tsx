import { FormFieldProps } from "./FormField.types";
import styles from "./FormField.module.css";

export const FormField = ({
  children,
  className,
  direction = "column",
  ...restProps
}: FormFieldProps) => {
  return (
    <div
      {...restProps}
      className={`${styles.container} ${styles[`container--direction-${direction}`]} ${className || ""}`}
    >
      {children}
    </div>
  );
};
