import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { InputSizeMeasure } from "../../../types/input-size.types";
import { Tabs } from "./Tabs.component";
import { TabPanel } from "./TabPanel/TabPanel.component";
import { TabsProps, TabAlignment } from "./Tabs.types";

export default {
  title: "molecules/Tabs",
  component: Tabs,
  argTypes: {
    alignment: {
      control: "select",
      options: Object.values(TabAlignment),
    },
    size: {
      control: "select",
      options: Object.values(InputSizeMeasure),
    },
  },
} as Meta<typeof Tabs>;

const Template: StoryFn<TabsProps> = (args) => (
  <div style={{ width: "500px" }}>
    <Tabs {...args}>
      <TabPanel title="Perros">
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "999px",
            backgroundColor: "lime",
          }}
        />
      </TabPanel>
      <TabPanel title="Gatos">
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "999px",
            backgroundColor: "coral",
          }}
        />
      </TabPanel>
      <TabPanel title="Peces">
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "999px",
            backgroundColor: "blue",
          }}
        />
      </TabPanel>
    </Tabs>
  </div>
);

export const WithStartAlignment = Template.bind({});
WithStartAlignment.args = {
  alignment: TabAlignment.start,
};

export const WithSpaceAroundAlignment = Template.bind({});
WithSpaceAroundAlignment.args = {
  alignment: TabAlignment["space-around"],
};
