import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BarChart } from "./BarChart.component";
import { BarChartProps, BarChartDataItem } from "./BarChart.types";

export default {
  title: "molecules/Chart/BarChart",
  component: BarChart,
  argTypes: {
    layout: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    data: {
      control: "object",
    },
    legendIsVisible: {
      control: "boolean",
    },
    quantityLabelIsVisible: {
      control: "boolean",
    },
  },
} as Meta;

const Template: StoryFn<BarChartProps> = (args) => (
  <div style={{  width: '300px', height: "300px", }}>
    <BarChart {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  data: [
    { name: "Dogs", value: 24 },
    { name: "Cats", value: 10 },
  ] as BarChartDataItem[],
  quantityLabelIsVisible: true
};

export const GroupedBars = Template.bind({});
GroupedBars.args = {
  data: [
    { name: "Spain", dogs: 67, cats: 34 },
    { name: "Colombia", dogs: 23, cats: 63 },
    { name: "Argentina", dogs: 12, cats: 28 },
  ] as BarChartDataItem[],
  legendIsVisible: true,
};
