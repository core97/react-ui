import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { InputSizeMeasure } from "../../../types/input-size.types";
import { Color } from "../../../types/colors.types";
import { Text } from "./Text.component";
import { TextProps, TextTagAs, TextWeight } from "./Text.types";

export default {
  title: "atoms/Text",
  component: Text,
  argTypes: {
    as: {
      control: "select",
      options: Object.values(TextTagAs),
    },
    color: {
      control: "select",
      options: Object.values(Color),
    },
    size: {
      control: "select",
      options: Object.values(InputSizeMeasure),
    },
    weight: {
      control: "select",
      options: Object.keys(TextWeight),
    },
  },
} as Meta<typeof Text>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Lorem ipsum",
};
