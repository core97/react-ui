import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { InputSizeMeasure } from "../../../types/input-size.types";
import { Pagination } from "./Pagination.component";
import { PaginationProps } from "./Pagination.types";

export default {
  title: "molecules/Pagination",
  component: Pagination,
  argTypes: {
    totalPages: {
      control: "number",
    },
    currentPage: {
      control: "number",
    },
    nextButtonLabel: {
      control: "text",
    },
    previousButtonLabel: {
      control: "text",
    },
    size: {
      control: "select",
      options: Object.values(InputSizeMeasure),
    },
  },
} as Meta<typeof Pagination>;

const Template: StoryFn<PaginationProps> = (args) => (
  <div style={{ width: "fit-content" }}>
    <Pagination {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  totalPages: 8,
  currentPage: 4,
};
