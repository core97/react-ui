import { Meta, StoryFn } from "@storybook/react";
import { Textarea } from "./Textarea.component";
import { TextareaProps } from "./Textarea.types";
import { InputSizeMeasure } from "../../../types/input-size.types";

export default {
  title: "atoms/Textarea",
  component: Textarea,
  argTypes: {
    isInvalid: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: Object.keys(InputSizeMeasure),
    },
  },
} as Meta<typeof Textarea>;

const Template: StoryFn<TextareaProps> = (args) => (
  <div style={{ width: "fit-content" }}>
    <Textarea {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Lorem ipsum",
};

export const WithRows = Template.bind({});
WithRows.args = {
  placeholder: "Lorem ipsum",
  rows: 15
};


export const WithError = Template.bind({});
WithError.args = {
  placeholder: "Lorem ipsum",
  isInvalid: true
};
