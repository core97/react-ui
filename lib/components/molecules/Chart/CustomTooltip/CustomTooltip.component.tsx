import { Text } from "../../../atoms/Text";
import { CustomTooltipProps } from "./CustomTooltip.types";
import { calcPercentage } from "./CustomTooltip.helper";
import styles from "./CustomTooltip.module.css";

export const CustomTooltip = ({
  variant,
  active,
  payload,
  label,
  total,
}: CustomTooltipProps) => {
  if (active && payload?.length) {
    return (
      <div className={styles.container}>
        {label && (
          <header className={styles.header}>
            <Text size="xs" weight="600">
              {label}
            </Text>
          </header>
        )}

        <ul className={styles.content}>
          {payload.map((el) => {
            const value: number = el.dataKey
              ? el.payload[el.dataKey]
              : undefined;

            return (
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
                    {`${value}${calcPercentage(value, total)}`}
                  </Text>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return null;
};
