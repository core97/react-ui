import { Meta, StoryFn } from "@storybook/react";
import { TextTagAs, TextWeight } from "../Text/Text.types";
import { InputSizeMeasure } from "../../../types/input-size.types";
import { Color } from "../../../types/colors.types";
import { FormLabel } from "./FormLabel.component";
import { FormLabelProps } from "./FormLabel.types";

export default {
  title: "atoms/FormLabel",
  component: FormLabel,
  argTypes: {
    as: {
      control: "select",
      options: Object.values(TextTagAs),
    },
    color: {
      control: "select",
      options: Object.values(Color),
    },
    htmlFor: {
      control: "text",
    },
    isRequired: {
      control: "boolean",
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
} as Meta<typeof FormLabel>;

const Template: StoryFn<FormLabelProps> = (args) => <FormLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Lorem ipsum",
};

export const Required = Template.bind({});
Required.args = {
  isRequired: true,
  children: "Lorem ipsum",
};
