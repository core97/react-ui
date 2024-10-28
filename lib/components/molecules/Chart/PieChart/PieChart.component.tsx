import { useState, useRef, useLayoutEffect } from "react";
import {
  PieChart as Chart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import { useTheme } from "../../../../hooks/useTheme";
import { CustomTooltip } from "../CustomTooltip";
import { CustomLegend } from "../CustomLegend";
import { COLORS } from "../Chart.contstants";
import { calcFontSizeLabel } from "./PieChart.helper";
import { PieChartProps } from "./PieChart.types";
import styles from "./PieChart.module.css";

export const PieChart = ({
  data,
  type = "pie",
  legendIsVisible,
  labelIsVisible,
  quantityLabel,
  quantityLabelIsVisible,
}: PieChartProps) => {
  const [size, setSize] = useState({
    height: 0,
    width: 0,
  });

  const chartRef = useRef<HTMLDivElement>(null);

  const { colorScheme } = useTheme();

  const colors = Object.values(COLORS);

  const dataWithColors = data.map((el, index) => ({
    ...el,
    fill: colors[index],
  }));

  const total = data.reduce((acc, item) => acc + item.value, 0);
  const fontSizeDivider = calcFontSizeLabel(total);

  useLayoutEffect(() => {
    if (chartRef.current) {
      setSize({
        height: chartRef.current?.clientHeight ?? 0,
        width: chartRef.current?.clientWidth ?? 0,
      });
    }
  }, []);

  return (
    <ResponsiveContainer
      minHeight={100}
      width="100%"
      height="100%"
      ref={chartRef}
      className={labelIsVisible ? styles["wrapper--show-overflow-labels"] : ""}
    >
      <Chart data={dataWithColors}>
        <Pie
          data={dataWithColors}
          dataKey="value"
          nameKey="name"
          innerRadius={type === "doughnut" ? "50%" : undefined}
          stroke="none"
          labelLine={false}
          {...(labelIsVisible && {
            label: ({ payload, ...props }) => {
              return (
                <text
                  cx={props.cx}
                  cy={props.cy}
                  x={props.x}
                  y={props.y}
                  textAnchor={props.textAnchor}
                  dominantBaseline={props.dominantBaseline}
                  fill="#ffffff"
                  className={styles.quantity_label}
                >
                  {payload?.payload?.name}
                </text>
              );
            },
          })}
        >
          {Boolean(type === "doughnut" && quantityLabelIsVisible) && (
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className={styles.donut_quantity_label}
                        style={{
                          fontSize: `${size.height / fontSizeDivider}px`,
                        }}
                      >
                        {total}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className={styles.donut_description_label}
                      >
                        {quantityLabel}
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          )}
        </Pie>

        {legendIsVisible && <Legend content={<CustomLegend variant="pie" />} />}

        <Tooltip
          cursor={{ opacity: colorScheme === "dark" ? 0.1 : 0.3 }}
          content={(props) => (
            <CustomTooltip
              {...props}
              variant="pie"
              total={data.reduce((acc, el) => acc + el.value, 0)}
            />
          )}
        />
      </Chart>
    </ResponsiveContainer>
  );
};
