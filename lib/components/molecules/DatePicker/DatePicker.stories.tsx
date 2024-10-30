import { Meta, StoryFn } from "@storybook/react";
import { Mode } from "react-day-picker";
import { DatePicker } from "./DatePicker.component";
import { DatePickerProps } from "./DatePicker.types";

export default {
  title: "molecules/DatePicker",
  component: DatePicker,
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
} as Meta<typeof DatePicker>;

const Template: StoryFn<DatePickerProps> = (args) => (
  <div style={{ width: "fit-content" }}>
    <DatePicker {...args} placeholder="dd/mm/yyyy" />
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
