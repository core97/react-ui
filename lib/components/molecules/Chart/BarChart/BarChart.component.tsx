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
import { CustomTooltip } from "../CustomTooltip";
import { COLORS } from "../Chart.contstants";
import { BarChartProps } from "./BarChart.types";
import styles from "./BarChart.module.css";

export const BarChart = ({
  data,
  layout = "horizontal",
  legendIsVisible,
}: BarChartProps) => {
  const { colorScheme } = useTheme();

  const colors = Object.values(COLORS);

  return (
    <ResponsiveContainer minHeight={100} width="100%" height="100%">
      <Chart data={data} layout={layout}>
        <CartesianGrid
          vertical={layout !== "horizontal"}
          horizontal={layout !== "vertical"}
          className={styles.cartesian_grid}
          opacity={colorScheme === "dark" ? 0.1 : 0.3}
        />
        {layout === "vertical" && (
          <>
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              className={styles.axis}
            />
            <XAxis type="number" hide />
          </>
        )}
        {layout === "horizontal" && (
          <>
            <YAxis hide />
            <XAxis
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              dataKey="name"
              className={styles.axis}
            />
          </>
        )}
        <Tooltip
          cursor={{ opacity: colorScheme === "dark" ? 0.1 : 0.3 }}
          content={(props) => <CustomTooltip variant="bar" {...props} />}
        />
        {legendIsVisible && <Legend />}
        {Object.keys(data[0])
          .filter((key) => key !== "name")
          .map((key, index) => (
            <Bar dataKey={key} fill={colors[index]} radius={[4, 4, 4, 4]} />
          ))}
      </Chart>
    </ResponsiveContainer>
  );
};
