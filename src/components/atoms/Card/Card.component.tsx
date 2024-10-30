import { CardProps, CardAs } from "./Card.types";
import styles from "./Card.module.css";

export const Card = (props: CardProps) => {
  const classNames = [styles.card, props.className || ""];

  if (props.as === CardAs.article) {
    const { as, ...rest } = props;
    const Component = as;

    return <Component {...rest} className={classNames.join(" ")} />;
  } else if (props.as === CardAs.button) {
    const { as, ...rest } = props;
    const Component = as;

    return <Component {...rest} className={classNames.join(" ")} />;
  } else if (props.as === CardAs.div) {
    const { as, ...rest } = props;
    const Component = as;

    return <Component {...rest} className={classNames.join(" ")} />;
  } else if (props.as === CardAs.form) {
    const { as, ...rest } = props;
    const Component = as;

    return <Component {...rest} className={classNames.join(" ")} />;
  } else if (props.as === CardAs.section) {
    const { as, ...rest } = props;
    const Component = as;

    return <Component {...rest} className={classNames.join(" ")} />;
  }

  return null;
};
