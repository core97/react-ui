import React from "react";
import styles from "./SelectOptionList.module.css";

export const SelectOptionList = ({ children, isOpen, positionToOpen }) => {
  const classNames = [
    styles.options_list,
    isOpen ? styles["options_list--opened"] : "",
    styles[`options_list--open-${positionToOpen}`],
  ];

  return (
    <ul role="listbox" aria-hidden={!isOpen} className={classNames.join(" ")}>
      {children}
    </ul>
  );
};
