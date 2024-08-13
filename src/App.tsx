import { useState } from "react";
import {
  ThemeContextProvider,
  ColorSchemeToggle,
  Table,
  DatePicker,
  Drawer,
  useDisclosure,
  Text,
} from "../lib/main";

const rows = [
  { id: "1", name: "Grey", petType: "DOG" },
  { id: "2", name: "Gea", petType: "DOG" },
  { id: "3", name: "Michi", petType: "CAT" },
  { id: "4", name: "Grey", petType: "DOG" },
  { id: "5", name: "Gea", petType: "DOG" },
  { id: "6", name: "Michi", petType: "CAT" },
];

function App() {
  const [selected, setSelected] = useState<string[]>([]);
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <ThemeContextProvider>
      <main
        style={{
          marginTop: "200px",
          border: "1px solid red",
          display: "grid",
          placeContent: "center",
          gap: "24px",
        }}
      >
        <Drawer isOpen={isOpen} onClose={onClose} placement="left">
          <Text size="5xl">d</Text>
          <Text size="5xl">Hola</Text>
          <Text size="5xl">Hola</Text>
          <Text size="5xl">Hola</Text>
          <Text size="5xl">Hola</Text>
          <Text size="5xl">d</Text>
          <Text size="5xl">Hola</Text>
          <Text size="5xl">Hola</Text>
          <Text size="5xl">Hola</Text>
          <Text size="5xl">Hola</Text>
          <Text size="5xl">Hola 7</Text>
          <Text size="5xl">Hola 6 </Text>
          <Text size="5xl">Hola 5 </Text>
          <Text size="5xl">Hola4 </Text>
          <Text size="5xl">Hola 3</Text>
          <Text size="5xl">Hola 1 </Text>

          <DatePicker mode="single" />
          <DatePicker mode="single" />
          <DatePicker mode="single" />
        </Drawer>

        <button onClick={onOpen}>Abrir drawer</button>

        <Table
          rows={rows.map((el) => ({
            content: { name: el.name, petType: el.petType },
            id: el.id,
          }))}
          columns={{ name: "Nombre", petType: "Tipo de mascota" }}
          onRowSelect={setSelected}
          selectedRows={selected}
          actions={[
            { label: "Borrar", onClick: console.log, iconLeft: "calendar" },
          ]}
        />

        <ColorSchemeToggle />
      </main>
    </ThemeContextProvider>
  );
}

export default App;
