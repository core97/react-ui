import { FONT_SIZE_CLASS_NAMES } from "../../../constants/class-names/font-size.constants";
import { INPUT_SIZE_CLASS_NAMES } from "../../../constants/class-names/input-size.constants";
import { TextareaProps } from "./Textarea.types";
import styles from "./Textarea.module.css";

export const Textarea = ({
  size = "m",
  isInvalid,
  ...rest
}: TextareaProps) => {
  const classNames = [
    styles.textarea,
    FONT_SIZE_CLASS_NAMES[size],
    INPUT_SIZE_CLASS_NAMES[size],
  ];

  return (
    <textarea
      {...rest}
      aria-invalid={!!isInvalid}
      className={classNames.join(" ")}
    />
  );
};
