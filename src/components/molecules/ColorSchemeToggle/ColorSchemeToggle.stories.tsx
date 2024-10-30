import { Meta, StoryFn } from "@storybook/react";
import { ColorSchemeToggle } from "./ColorSchemeToggle.component";
import { ColorSchemeToggleProps } from "./ColorSchemeToggle.types";

export default {
  title: "molecules/ColorSchemeToggle",
  component: ColorSchemeToggle,
  argTypes: {
    size: {
      control: "number",
    },
  },
} as Meta<typeof ColorSchemeToggle>;

const Template: StoryFn<ColorSchemeToggleProps> = (args) => (
  <ColorSchemeToggle {...args} />
);

export const Default = Template.bind({});
Default.args = {};
