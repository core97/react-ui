import { Meta, StoryFn } from "@storybook/react";
import { Button } from "../Button";
import { Popover } from "./Popover.component";
import { PopoverPosition, PopoverProps } from "./Popover.types";

export default {
  title: "atoms/Popover",
  component: Popover,
  argTypes: {
    position: {
      control: "select",
      options: Object.keys(PopoverPosition),
    },
    sizeAsTrigger: {
      control: "boolean",
    },
    withContentStyles: {
      control: "boolean",
    },
  },
} as Meta<typeof Popover>;

const Template: StoryFn<PopoverProps> = (args) => (
  <div style={{ height: "100dvh", display: "grid", placeContent: "center" }}>
    <Popover {...args} trigger={<Button>Open popover</Button>} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  withContentStyles: true,
  content: (
    <div style={{ padding: "12px" }}>
      <Button variant="ghost" iconLeft="checked" isFullWidth alignment="start">
        Create
      </Button>
      <Button variant="ghost" iconLeft="close" isFullWidth alignment="start">
        Edit
      </Button>
    </div>
  ),
};
