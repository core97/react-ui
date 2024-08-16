import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { InputText } from "../InputText";
import { Checkbox } from "../Checkbox";
import { FormLabel } from "../FormLabel";
import { FormHelper } from "../FormHelper";
import { FormField } from "./FormField.component";
import { FormFieldProps, FormFieldDirection } from "./FormField.types";

export default {
  title: "atoms/FormField",
  component: FormField,
  argTypes: {
    direction: {
      control: "select",
      options: Object.values(FormFieldDirection),
    },
  },
} as Meta<typeof FormField>;

const Template: StoryFn<FormFieldProps> = (args) => <FormField {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <FormLabel htmlFor="input_id">Lorem ipsum</FormLabel>
      <InputText id="input_id" placeholder="example@gmail.com" />
    </>
  ),
};

export const ColumnDirection = Template.bind({});
ColumnDirection.args = {
  direction: FormFieldDirection.column,
  children: (
    <>
      <FormLabel htmlFor="input_id">Lorem ipsum</FormLabel>
      <InputText id="input_id" placeholder="example@gmail.com" />
    </>
  ),
};

export const RowDirection = Template.bind({});
RowDirection.args = {
  direction: FormFieldDirection.row,
  children: (
    <>
      <Checkbox id="input_id" />
      <FormLabel htmlFor="input_id">Lorem ipsum</FormLabel>
    </>
  ),
};

export const WithHelper = Template.bind({});
WithHelper.args = {
  direction: FormFieldDirection.column,
  children: (
    <>
      <FormLabel htmlFor="input_id">Lorem ipsum</FormLabel>
      <InputText id="input_id" placeholder="example@gmail.com" />
      <FormHelper>Lorem ipsum dolor sit amet</FormHelper>
    </>
  ),
};
