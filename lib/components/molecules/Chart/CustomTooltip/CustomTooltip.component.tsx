import { Text } from "../../../atoms/Text";
import { CustomTooltipProps } from "./CustomTooltip.types";
import styles from "./CustomTooltip.module.css";

export const CustomTooltip = (props: CustomTooltipProps) => {
  if (props.active && props.payload?.length) {
    console.log(props);

    return (
      <div className={styles.container}>
        <Text size="xs" weight="600">
          {props.label}
        </Text>
        <ul className={styles.content}>
          {props.payload.map((el) => (
            <li key={el.color} className={styles.item}>
              <div
                className={styles.color_indicator}
                style={{ backgroundColor: el.color ?? el.payload.fill }}
              ></div>
              <div className={styles.item_content}>
                <Text size="xs" weight="300" color="light-100">
                  {props.variant === "bar" ? el.dataKey : el.name}
                </Text>
                <Text size="xs">
                  {el.dataKey ? el.payload[el.dataKey] : "NO_VALUE"}
                </Text>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
};
