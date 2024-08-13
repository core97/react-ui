import React from "react";
import { CardProps } from "./Card.types";
import styles from "./Card.module.css";

export const Card = (props: CardProps) => {
  const classNames = [styles.card, props.className || ""];

  if (props.as === "article") {
    const { as, ...rest } = props;
    const Component = as;

    return <Component {...rest} className={classNames.join(" ")} />;
  } else if (props.as === "button") {
    const { as, ...rest } = props;
    const Component = as;

    return <Component {...rest} className={classNames.join(" ")} />;
  } else if (props.as === "div") {
    const { as, ...rest } = props;
    const Component = as;

    return <Component {...rest} className={classNames.join(" ")} />;
  } else if (props.as === "form") {
    const { as, ...rest } = props;
    const Component = as;

    return <Component {...rest} className={classNames.join(" ")} />;
  } else if (props.as === "section") {
    const { as, ...rest } = props;
    const Component = as;

    return <Component {...rest} className={classNames.join(" ")} />;
  }

  return null;
};
