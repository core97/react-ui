import { Text } from "../../../atoms/Text";
import { CustomLegendProps } from "./CustomLegend.types";
import styles from "./CustomLegend.module.css";

export const CustomLegend = ({ payload }: CustomLegendProps) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {payload?.map((el, index) => (
          <li key={index} className={styles.list_item}>
            <div
              className={styles.color_indicator}
              style={{ backgroundColor: el.color }}
            ></div>
            <Text size="xs" as="span">
              {el.dataKey?.toString() ?? el.value}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
};
