import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "../../atoms/Button";
import { Drawer } from "./Drawer.component";
import { DrawerProps, DrawerPlacement, DrawerSize } from "./Drawer.types";

export default {
  title: "molecules/Drawer",
  component: Drawer,
  argTypes: {
    children: {
      control: "object",
    },
    isOpen: {
      control: "boolean",
    },
    onClose: {},
    footer: {
      control: "object",
    },
    header: {
      control: "object",
    },
    placement: {
      control: "select",
      options: Object.values(DrawerPlacement),
    },
    size: {
      control: "select",
      options: Object.values(DrawerSize),
    },
  },
} as Meta<typeof Drawer>;

const Template: StoryFn<DrawerProps> = (args) => (
  <Drawer {...args}>
    <h1>Hello world</h1>
  </Drawer>
);

export const Default = Template.bind({});
Default.args = {};

export const WithHeader = Template.bind({});
WithHeader.args = {
  header: <h1>Header</h1>,
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  footer: (
    <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
      <Button variant="ghost">Cancel</Button>
      <Button>Submit</Button>
    </div>
  ),
};
