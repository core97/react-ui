import { Text } from "../../../atoms/Text";
import { CustomTooltipProps } from "./CustomTooltip.types";
import styles from "./CustomTooltip.module.css";

export const CustomTooltip = ({
  variant,
  active,
  payload,
  label,
}: CustomTooltipProps) => {
  if (active && payload?.length) {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <Text size="xs" weight="600">
            {label}
          </Text>
        </header>

        <ul className={styles.content}>
          {payload.map((el) => (
            <li key={el.color} className={styles.item}>
              <div
                className={styles.color_indicator}
                style={{ backgroundColor: el.color ?? el.payload.fill }}
              ></div>
              <div className={styles.item_content}>
                <Text size="xs" weight="300" color="light-100">
                  {variant === "bar" ? el.dataKey : el.name}
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
