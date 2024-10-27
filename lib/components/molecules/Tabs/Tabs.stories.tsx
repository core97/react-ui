import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { InputSizeMeasure } from "../../../types/input-size.types";
import { InputText } from "../../atoms/InputText";
import { FormField } from "../../atoms/FormField";
import { FormLabel } from "../../atoms/FormLabel";
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
      <TabPanel title="Dogs">
        <FormField>
          <FormLabel>Dog name</FormLabel>
          <InputText />
        </FormField>
      </TabPanel>
      <TabPanel title="Cats">
        <FormField>
          <FormLabel>Cat name</FormLabel>
          <InputText />
        </FormField>
      </TabPanel>
      <TabPanel title="Fishes">
        <FormField>
          <FormLabel>Fish name</FormLabel>
          <InputText />
        </FormField>
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
