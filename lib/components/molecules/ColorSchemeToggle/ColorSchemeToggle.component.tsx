import { useTheme } from "../../../hooks/useTheme";

export const ColorSchemeToggle = () => {
  const { toggleColorScheme } = useTheme();

  return (
    <button type="button" onClick={toggleColorScheme}>
      Cambiar tema
    </button>
  );
};
