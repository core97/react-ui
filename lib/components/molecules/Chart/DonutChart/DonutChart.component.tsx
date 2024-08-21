import { useState, useRef, useLayoutEffect } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import { useTheme } from "../../../../hooks/useTheme";
import { CustomTooltip } from "../CustomTooltip";
import { COLORS } from "../Chart.contstants";
import { DonutChartProps } from "./DonutChart.types";
import styles from "./DonutChart.module.css";

export const DonutChart = ({
  data,
  legendIsVisible,
  totalIsVisible,
}: DonutChartProps) => {
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

  useLayoutEffect(() => {
    setSize({
      height: chartRef.current?.clientHeight ?? 0,
      width: chartRef.current?.clientWidth ?? 0
    });
  }, []);

  return (
    <ResponsiveContainer
      minHeight={100}
      width="100%"
      height="100%"
      ref={chartRef}
    >
      <PieChart data={dataWithColors}>
        <Pie
          data={dataWithColors}
          dataKey="value"
          nameKey="name"
          innerRadius="50%"
          stroke="none"
        >
          {totalIsVisible && (
            <Label
              position="center"
              fontSize={`${(size.height + size.width) / 28}px`}
              value={data.reduce((acc, item) => acc + item.value, 0)}
              className={styles.label}
              fontWeight={700}
            />
          )}
        </Pie>
        <Tooltip
          cursor={{ opacity: colorScheme === "dark" ? 0.1 : 0.3 }}
          content={(props) => <CustomTooltip {...props} />}
        />
        {legendIsVisible && <Legend />}
      </PieChart>
    </ResponsiveContainer>
  );
};
