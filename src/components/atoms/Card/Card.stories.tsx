import { Meta, StoryFn } from "@storybook/react";
import { Card } from "./Card.component";
import { Text } from "../Text";
import { CardProps, CardAs } from "./Card.types";

export default {
  title: "atoms/Card",
  component: Card,
  argTypes: {
    as: {
      control: "select",
      options: Object.values(CardAs),
    },
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => (
  <Card
    style={{
      width: "200px",
      height: "ahuto",
      padding: "16px",
      display: "grid",
      placeContent: "center",
    }}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  as: "div",
  children: <Text>Lorem ipsum</Text>,
};
