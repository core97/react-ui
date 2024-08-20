import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import { useTheme } from "../../../../hooks/useTheme";
import { COLORS } from "../Chart.contstants";
import { adjustRadiusForNewHeight } from "./DonutChart.helper";
import { DonutChartProps } from "./DonutChart.types";
import styles from "./DonutChart.module.css";

export const DonutChart = ({
  data,
  height = 200,
  legendIsVisible,
  totalIsVisible,
}: DonutChartProps) => {
  const { colorScheme } = useTheme();

  const colors = Object.values(COLORS);

  const dataWithColors = data.map((el, index) => ({
    ...el,
    fill: colors[index],
  }));

  const radius = adjustRadiusForNewHeight(55, 80, +height);

  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart data={dataWithColors}>
        <Pie
          data={dataWithColors}
          dataKey="value"
          nameKey="name"
          innerRadius={radius.innerRadius}
          outerRadius={radius.outerRadius}
          stroke="none"
        >
          {totalIsVisible && (
            <Label
              position="center"
              fontSize={`${+height / 12.5}px`}
              value={data.reduce((acc, item) => acc + item.value, 0)}
              className={styles.label}
              fontWeight={700}
            />
          )}
        </Pie>
        <Tooltip
          cursor={{ opacity: colorScheme === "dark" ? 0.1 : 0.3 }}
          wrapperClassName={styles.tooltip__wrapper}
          labelClassName={styles.tooltip__label}
        />
        {legendIsVisible && <Legend />}
      </PieChart>
    </ResponsiveContainer>
  );
};
