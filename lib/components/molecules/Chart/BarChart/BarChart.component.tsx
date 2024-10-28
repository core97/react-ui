import {
  BarChart as Chart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { useTheme } from "../../../../hooks/useTheme";
import { CustomTooltip } from "../CustomTooltip";
import { CustomLegend } from "../CustomLegend";
import { COLORS } from "../Chart.contstants";
import { BarChartProps } from "./BarChart.types";
import styles from "./BarChart.module.css";

export const BarChart = ({
  data,
  layout = "horizontal",
  legendIsVisible,
  quantityLabelIsVisible,
}: BarChartProps) => {
  const { colorScheme } = useTheme();

  const colors = Object.values(COLORS);

  const largestName = data.reduce(
    (previous, current) =>
      current.name.length > previous.length ? current.name : previous,
    data[0]?.name || ""
  );

  console.log('*** LARGEST NAME ***');
  console.log(largestName);

  return (
    <ResponsiveContainer
      minHeight={100}
      width="100%"
      height="100%"
      className={styles.container}
    >
      <Chart
        data={data}
        layout={layout}
        accessibilityLayer
        margin={{
          ...(layout === "vertical" && quantityLabelIsVisible && { right: 42 }),
          ...(layout === "horizontal" && quantityLabelIsVisible && { top: 24 }),
        }}
      >
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
              width={largestName.length * 10}
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
        {legendIsVisible && (
          <Legend
            wrapperStyle={{ paddingTop: "10px" }}
            content={(props) => <CustomLegend {...props} variant="bar" />}
          />
        )}
        {Object.keys(data[0])
          .filter((key) => key !== "name")
          .map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              fill={colors[index]}
              radius={[4, 4, 4, 4]}
            >
              {quantityLabelIsVisible && (
                <LabelList
                  position={layout === "horizontal" ? "top" : "right"}
                  offset={layout === "horizontal" ? 12 : 8}
                  fontSize={12}
                  className={styles.quantity_label}
                />
              )}
            </Bar>
          ))}
      </Chart>
    </ResponsiveContainer>
  );
};
