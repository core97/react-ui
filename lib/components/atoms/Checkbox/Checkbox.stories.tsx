import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { InputSizeMeasure } from "../../../types/input-size.types";
import { Checkbox } from "./Checkbox.component";
import { CheckboxProps } from "./Checkbox.types";

export default {
  title: "atoms/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: Object.values(InputSizeMeasure),
      },
    },
    isInvalid: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  isInvalid: false,
};

export const Invalid = Template.bind({});
Invalid.args = {
  size: "medium",
  isInvalid: true,
};
