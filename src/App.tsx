import { ThemeContextProvider } from "@hooks/useTheme";

function App() {
  return (
    <ThemeContextProvider>
      <div>
        <h1>Hello world</h1>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
