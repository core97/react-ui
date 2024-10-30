import { useState, Children, isValidElement } from "react";
import { motion } from "framer-motion";
import { Text } from "../../atoms/Text";
import { TabPanel, TabPanelProps } from "./TabPanel";
import { TabsProps } from "./Tabs.types";
import styles from "./Tabs.module.css";

export const Tabs = ({
  alignment = "start",
  children,
  size = "m",
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const childrenArray = Children.toArray(children);

  const tabs = childrenArray.map((el) => {
    if (!isValidElement<TabPanelProps>(el) || el.type !== TabPanel) {
      throw Error("[Tabs]: the child sould be <TabPanel>.");
    }
    return el.props;
  });

  return (
    <div className={styles.container}>
      <header
        className={`${styles.header} ${styles[`header--alignment-${alignment}`]}`}
      >
        {tabs.map((el, index) => (
          <button
            key={el.title}
            type="button"
            onClick={() => setActiveTab(index)}
            className={`${styles.tab_button} ${activeTab === index ? styles["tab_button--active"] : ""} input--size-${size}`}
          >
            {activeTab === index && (
              <motion.div
                layoutId="active-pill"
                className={styles["tab_button-pill"]}
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <Text
              as="span"
              size={size}
              weight="700w"
              className={styles["tab_button-label"]}
            >
              {el.title}
            </Text>
          </button>
        ))}
      </header>
      <main className={styles.tab_content}>{tabs[activeTab].children}</main>
    </div>
  );
};
