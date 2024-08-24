import { Text } from "../../../atoms/Text";
import { CustomLegendProps } from "./CustomLegend.types";
import styles from "./CustomLegend.module.css";

export const CustomLegend = ({ payload }: CustomLegendProps) => {
  // console.log(props);

  return (
    <div className={styles.container}>
    <ul className={styles.list}>
      {payload?.map((el) => (
        <li key={`${el.dataKey}${el.payload?.value}`} className={styles.list_item}>
          <div
            className={styles.color_indicator}
            style={{ backgroundColor: el.color }}
          ></div>
          <Text size="xs" as="span">
            {el.dataKey?.toString()}
          </Text>
        </li>
      ))}
    </ul>
    </div>

  );
};
