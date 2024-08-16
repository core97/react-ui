import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FormHelper } from "./FormHelper.component";
import { FormHelperProps, FormHelperVariant } from "./FormHelper.types";

export default {
  title: "atoms/FormHelper",
  component: FormHelper,
  argTypes: {
    variant: {
      control: "select",
      options: Object.values(FormHelperVariant),
    },
  },
} as Meta<typeof FormHelper>;

const Template: StoryFn<FormHelperProps> = (args) => <FormHelper {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Lorem ipsum",
};

export const ErrorVariant = Template.bind({});
ErrorVariant.args = {
  variant: FormHelperVariant.error,
  children: "Lorem ipsum",
};

export const InfoVariant = Template.bind({});
InfoVariant.args = {
  variant: FormHelperVariant.info,

  children: "Lorem ipsum",
};
