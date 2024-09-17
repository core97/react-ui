import { useTheme } from "../../../hooks/useTheme";
import { Icon } from "../../atoms/Icon";
import { Button } from "../../atoms/Button";
import { ColorSchemeToggleProps } from "./ColorSchemeToggle.types";

export const ColorSchemeToggle = ({
  className,
  size = 24,
}: ColorSchemeToggleProps) => {
  const { toggleColorScheme, colorScheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={toggleColorScheme}
      size="xs"
      className={className}
    >
      <Icon name={colorScheme === "dark" ? "sun" : "moon"} size={size} />
    </Button>
  );
};
