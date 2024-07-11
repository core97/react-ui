import { SpinnerProps } from "./Spinner.types";
import styles from "./Spinner.module.css";

export const Spinner = ({
  color = "contrast-theme",
  measureSize,
  size = "m",
}: SpinnerProps) => {
  const classNames = [
    styles.spinner,
    measureSize ? "" : styles[`spinner--${size}`],
    styles[`spinner--color-${color}`],
  ];

  return (
    <div
      className={classNames.join(' ')}
      {...(measureSize && {
        style: { height: measureSize, width: measureSize },
      })}
    ></div>
  );
};
