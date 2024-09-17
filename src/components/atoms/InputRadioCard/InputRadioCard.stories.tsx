import { Meta, StoryFn } from "@storybook/react";
import { InputRadioCard } from "./InputRadioCard.component";
import {
  InputRadioCardProps,
  InputRadioCardDirection,
} from "./InputRadioCard.types";
import { ICON_BY_NAME } from "../Icon/Icon.contants";
import { InputSizeMeasure } from "../../../types/input-size.types";

export default {
  title: "atoms/InputRadioCard",
  component: InputRadioCard,
  argTypes: {
    label: {
      control: "text",
    },
    icon: {
      control: "select",
      options: Object.keys(ICON_BY_NAME),
    },
    isInvalid: {
      control: "boolean",
    },
    direction: {
      control: "select",
      options: Object.keys(InputRadioCardDirection),
    },
    size: {
      control: "select",
      options: Object.keys(InputSizeMeasure),
    },
  },
} as Meta<typeof InputRadioCard>;

const Template: StoryFn<InputRadioCardProps> = (args) => (
  <div style={{ width: 'fit-content'}}>
  <InputRadioCard {...args} />

  </div>
);

export const Default = Template.bind({});
Default.args = {
  icon: "calendar",
  label: "Lorem ipsum",
};

export const HorizontalDirection = Template.bind({});
HorizontalDirection.args = {
  label: "Lorem ipsum",
  icon: "calendar",
  direction: InputRadioCardDirection.horizontal,
};

export const VerticalDirection = Template.bind({});
VerticalDirection.args = {
  label: "Lorem ipsum",
  icon: "calendar",
  direction: InputRadioCardDirection.vertical,
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Lorem ipsum",
  icon: "calendar",
  isInvalid: true,
};
