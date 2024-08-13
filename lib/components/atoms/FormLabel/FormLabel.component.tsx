import { Text } from "../Text";
import { FormLabelProps } from "./FormLabel.types";
import styles from "./FormLabel.module.css";

export const FormLabel = ({
  as = "label",
  children,
  isRequired,
  ...restProps
}: FormLabelProps) => {
  return (
    <Text
      as={as}
      weight="600"
      color="contrast-theme-700"
      size="s"
      {...restProps}
    >
      {children}
      {isRequired && (
        <Text
          as="span"
          color="error-800"
          weight="700"
          className={styles.required_icon}
        >
          *
        </Text>
      )}
    </Text>
  );
};
