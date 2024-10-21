import { SpinnerProps } from "./Spinner.types";
import styles from "./Spinner.module.css";

export const Spinner = ({
  color = "contrast-theme",
  customSize,
  size = "m",
}: SpinnerProps) => {
  const classNames = [
    styles.spinner,
    customSize ? "" : styles[`spinner--${size}`],
    styles[`spinner--color-${color}`],
  ];

  return (
    <div
      className={classNames.join(" ")}
      {...(customSize && {
        style: { height: customSize, width: customSize },
      })}
    ></div>
  );
};
