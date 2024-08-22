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
import { COLORS } from "../Chart.contstants";
import { calcFontSizeLabel } from "./PieChart.helper";
import { PieChartProps } from "./PieChart.types";
import styles from "./PieChart.module.css";

export const PieChart = ({
  data,
  type = "pie",
  labelIsVisible,
  legendIsVisible,
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
    >
      <Chart data={dataWithColors}>
        <Pie
          data={dataWithColors}
          dataKey="value"
          nameKey="name"
          innerRadius={type === "doughnut" ? "50%" : undefined}
          stroke="none"
          label={labelIsVisible}
        >
          {type === "doughnut" && (
            <Label
              position="center"
              fontSize={`${size.height / fontSizeDivider}px`}
              value={total}
              className={styles.label}
              fontWeight={700}
            />
          )}
        </Pie>
        {legendIsVisible && <Legend layout="horizontal" align="center" />}

        <Tooltip
          cursor={{ opacity: colorScheme === "dark" ? 0.1 : 0.3 }}
          content={(props) => <CustomTooltip variant="pie" {...props} />}
        />
      </Chart>
    </ResponsiveContainer>
  );
};
