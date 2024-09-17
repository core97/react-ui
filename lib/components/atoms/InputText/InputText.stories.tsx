import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { InputText } from "./InputText.component";
import { InputTextProps, InputTextTypes } from "./InputText.types";
import { ICON_BY_NAME } from "../Icon/Icon.contants";
import { InputSizeMeasure } from "../../../types/input-size.types";

export default {
  title: "atoms/InputText",
  component: InputText,
  argTypes: {
    iconLeft: {
      control: "select",
      options: Object.keys(ICON_BY_NAME),
    },
    iconRight: {
      control: "select",
      options: Object.keys(ICON_BY_NAME),
    },
    isInvalid: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: Object.keys(InputSizeMeasure),
    },
    type: {
      control: "select",
      options: Object.keys(InputTextTypes),
    },
  },
} as Meta<typeof InputText>;

const Template: StoryFn<InputTextProps> = (args) => (
  <div style={{ width: "fit-content" }}>
    <InputText {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  icon: "calendar",
  label: "Lorem ipsum",
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  placeholder: 'Lorem ipsum',
  iconLeft: 'search',
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  placeholder: 'Lorem ipsum',
  iconRight: 'search',
};

export const WithError = Template.bind({});
WithError.args = {
  placeholder: 'Lorem ipsum',
  isInvalid: true,
};
