import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Color } from "../../../types/colors.types";
import { Icon } from "./Icon.component";
import { IconProps } from "./Icon.types";
import { ICON_BY_NAME } from "./Icon.contants";

export default {
  title: "atoms/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: "select",
      options: Object.keys(ICON_BY_NAME),
    },
    size: {
      control: "number",
    },
    color: {
      control: "select",
      options: Object.keys(Color),
    },
  },
} as Meta<typeof Icon>;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "search",
  size: 46,
};
