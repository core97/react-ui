import { Meta, StoryFn } from "@storybook/react";
import { Table } from "./Table.component";
import { TableProps } from "./Table.types";

const ROWS = [
  { id: "1", name: "Grey", petType: "DOG" },
  { id: "2", name: "Gea", petType: "DOG" },
  { id: "3", name: "Michi", petType: "CAT" },
  { id: "4", name: "Scooby Doo", petType: "DOG" },
];

export default {
  title: "molecules/Table",
  component: Table,
} as Meta<typeof Table>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: StoryFn<TableProps<any>> = (args) => (
  <div style={{ width: "fit-content" }}>
    <Table {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  rows: ROWS.map((el) => ({
    content: { name: el.name, petType: el.petType },
    id: el.id,
  })),
  columns: { name: "Nombre", petType: "Tipo de mascota" },
};

export const WithActions = Template.bind({});
WithActions.args = {
  rows: ROWS.map((el) => ({
    content: { name: el.name, petType: el.petType },
    id: el.id,
  })),
  columns: { name: "Nombre", petType: "Tipo de mascota" },
  actions: [
    { label: "Editar", onClick: console.log, iconLeft: "edit" },
    { label: "Borrar", onClick: console.log, iconLeft: "delete" },
  ],
};

export const WithSelectableRows = Template.bind({});
WithSelectableRows.args = {
  rows: ROWS.map((el) => ({
    content: { name: el.name, petType: el.petType },
    id: el.id,
  })),
  columns: { name: "Nombre", petType: "Tipo de mascota" },
  onRowSelect: console.log,
};
