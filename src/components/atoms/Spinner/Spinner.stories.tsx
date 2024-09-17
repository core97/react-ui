import { Meta, StoryFn } from "@storybook/react";
import { ColorName } from "../../../types/colors.types";
import { Spinner } from "./Spinner.component";
import { SpinnerProps, SpinnerSize } from "./Spinner.types";

export default {
  title: "atoms/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      control: "select",
      options: Object.keys(SpinnerSize),
    },
    color: {
      control: "select",
      options: Object.keys(ColorName),
    },
    customSize: {
      control: "text",
    },
  },
} as Meta<typeof Spinner>;

const Template: StoryFn<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "m",
};

export const WithCutomSize = Template.bind({});
WithCutomSize.args = {
  customSize: "64px",
};
