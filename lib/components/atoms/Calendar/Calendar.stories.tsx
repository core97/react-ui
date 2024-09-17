import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Mode } from "react-day-picker";
import { Calendar } from "./Calendar.component";
import { CalendarProps } from "./Calendar.types";

export default {
  title: "atoms/Calendar",
  component: Calendar,
  argTypes: {
    mode: {
      control: "select",
      options: Object.keys({
        multiple: "multiple",
        range: "range",
        single: "single",
      } as Record<Mode, Mode>),
    },
  },
} as Meta<typeof Calendar>;

const Template: StoryFn<CalendarProps> = (args) => (
  <div style={{ width: "fit-content" }}>
    <Calendar {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  mode: "single",
};

export const Single = Template.bind({});
Single.args = {
  mode: "single",
};

export const Multiple = Template.bind({});
Multiple.args = {
  mode: "multiple",
};

export const Range = Template.bind({});
Range.args = {
  mode: "range",
};
