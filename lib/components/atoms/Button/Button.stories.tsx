import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./Button.component";
import { type ButtonProps, ButtonVariants } from "./Button.types";
import { ICON_BY_NAME } from "../Icon/Icon.contants";
import { InputSizeMeasure } from "../../../types/input-size.types";
import { ColorName } from "../../../types/colors.types";

export default {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    color: {
      control: "select",
      options: Object.values(ColorName),
    },
    iconLeft: {
      control: "select",
      options: Object.keys(ICON_BY_NAME),
    },
    iconRight: {
      control: "select",
      options: Object.keys(ICON_BY_NAME),
    },
    isFullWidth: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: Object.values(InputSizeMeasure),
    },
    variant: {
      control: "select",
      options: Object.values(ButtonVariants),
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  color: "primary",
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  children: "Button with Icon",
  iconLeft: "chevron_left",
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  children: "Button with Icon",
  iconRight: "chevron_right",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: "Full Width Button",
  isFullWidth: true,
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  children: "Loading Button",
  isLoading: true,
};

export const OutlineVariant = Template.bind({});
OutlineVariant.args = {
  children: "Outline Button",
  variant: "outline",
};

export const GhostVariant = Template.bind({});
GhostVariant.args = {
  children: "Ghost Button",
  variant: "ghost",
};

export const LinkVariant = Template.bind({});
LinkVariant.args = {
  children: "Link Button",
  variant: "link",
};
