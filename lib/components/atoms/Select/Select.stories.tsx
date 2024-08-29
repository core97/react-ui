import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Select } from "./Select.component";
import { SelectMultiValueProps, SelectSingleValueProps } from "./Select.types";
import { InputSizeMeasure } from "../../../types/input-size.types";

export default {
  title: "atoms/Select",
  component: Select,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    isInvalid: {
      control: "boolean",
    },
    isMulti: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
    searcher: {
      control: "boolean",
    },
    searcherPlaceholder: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: Object.keys(InputSizeMeasure),
    },
  },
} as Meta<typeof Select>;

const Template: StoryFn<SelectMultiValueProps | SelectSingleValueProps> = (
  args
) => (
  <div style={{ width: "200px" }}>
    <Select {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Select",
  options: [
    { label: "Dog", value: "dog" },
    { label: "Cat", value: "cat" },
    { label: "Bird", value: "bird" },
    { label: "Snake", value: "snake" },
  ],
};

export const MultiOptions = Template.bind({});
MultiOptions.args = {
  placeholder: "Select",
  isMulti: true,
  options: [
    { label: "Dog", value: "dog" },
    { label: "Cat", value: "cat" },
    { label: "Bird", value: "bird" },
    { label: "Snake", value: "snake" },
  ],
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  placeholder: "Select",
  searcher: true,
  searcherPlaceholder: 'Search',
  options: [
    { label: "Dog", value: "dog" },
    { label: "Cat", value: "cat" },
    { label: "Bird", value: "bird" },
    { label: "Snake", value: "snake" },
  ],
};

export const OptionWithIcon = Template.bind({});
OptionWithIcon.args = {
  placeholder: "Select",
  options: [
    { label: "Dog", value: "dog", icon: 'arrow_down' },
    { label: "Cat", value: "cat", icon: 'arrow_left' },
    { label: "Bird", value: "bird", icon: 'arrow_right' },
    { label: "Snake", value: "snake", icon: 'arrow_up' },
  ],
};

export const GroupOptions = Template.bind({});
GroupOptions.args = {
  placeholder: "Select",
  options: [
    {
      group: "Spanish food",
      options: [
        { label: "Paella", value: "paella" },
        { label: "Potato omelete", value: "potato_omelete" },
      ],
    },
    {
      group: "Italian food",
      options: [
        { label: "Carbonara", value: "carbonara" },
        { label: "Pizza", value: "pizza" },
      ],
    },
  ],
};

export const Invalid = Template.bind({});
Invalid.args = {
  placeholder: "Select",
  isInvalid: true,
  options: [
    { label: "Dog", value: "dog" },
    { label: "Cat", value: "cat" },
    { label: "Bird", value: "bird" },
    { label: "Snake", value: "snake" },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Select",
  disabled: true,
  options: [
    { label: "Dog", value: "dog" },
    { label: "Cat", value: "cat" },
    { label: "Bird", value: "bird" },
    { label: "Snake", value: "snake" },
  ],
};
