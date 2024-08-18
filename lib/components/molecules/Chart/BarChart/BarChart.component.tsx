import {
  BarChart as Chart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "../../../../hooks/useTheme";
import { COLORS } from "../Chart.contstants";
import { BarChartProps } from "./BarChart.types";
import styles from "./BarChart.module.css";

export const BarChart = ({
  data,
  height = 200,
  layout = "horizontal",
  legendIsVisible,
}: BarChartProps) => {
  const { colorScheme } = useTheme();
  const colors = Object.values(COLORS)

  return (
    <ResponsiveContainer width="100%" height={height}>
      <Chart data={data} layout={layout}>
        <CartesianGrid
          vertical={false}
          className={styles.cartesian_grid}
          opacity={colorScheme === "dark" ? 0.1 : 0.3}
        />
        <YAxis hide />
        <XAxis
          axisLine={false}
          tickLine={false}
          tickMargin={8}
          height={20}
          dataKey="name"
          className={styles.x_axis}
        />
        <Tooltip
          cursor={{ opacity: colorScheme === "dark" ? 0.1 : 0.3 }}
          wrapperClassName={styles.tooltip__wrapper}
          labelClassName={styles.tooltip__label}
        />
        {legendIsVisible && <Legend />}
        {Object.keys(data?.[0])
          .filter((key) => key !== "name")
          .map((key, index) => (
            <Bar dataKey={key} fill={colors[index]} radius={[6, 6, 6, 6]} />
          ))}
      </Chart>
    </ResponsiveContainer>
  );
};
