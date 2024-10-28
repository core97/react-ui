import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { PieChart } from "./PieChart.component";
import {
  PieChartDataItem,
  PieChartProps,
  PieChartType,
} from "./PieChart.types";

export default {
  title: "molecules/Chart/PieChart",
  component: PieChart,
  argTypes: {
    layout: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    type: {
      control: "select",
      options: Object.values(PieChartType),
    },
    data: {
      control: "object",
    },
    labelIsVisible: {
      control: "boolean",
    },
    legendIsVisible: {
      control: "boolean",
    },
    quantityLabelIsVisible: {
      control: "boolean",
    },
    quantityLabel: {
      control: "text",
    },
  },
} as Meta;

const Template: StoryFn<PieChartProps> = (args) => (
  <div style={{ width: "300px", height: "300px" }}>
    <PieChart {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  data: [
    { name: "Dogs", value: 24 },
    { name: "Cats", value: 10 },
  ] as PieChartDataItem[],
  legendIsVisible: true,
};

export const DoughnutVariant = Template.bind({});
DoughnutVariant.args = {
  type: PieChartType.doughnut,
  data: [
    { name: "Spain", value: 67 },
    { name: "Colombia", value: 23 },
    { name: "Argentina", value: 48 },
    { name: "Francia", value: 48 },
    { name: "Alemania", value: 48 },
  ] as PieChartDataItem[],
  labelIsVisible: true,
  quantityLabelIsVisible: true,
  quantityLabel: "Quantity",
};
