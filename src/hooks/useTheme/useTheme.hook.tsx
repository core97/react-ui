import React, { useState, useEffect, useContext } from "react";
import { ThemeContextValue, ThemeContextProviderProps } from "./useTheme.types";
import "../../styles/global.css";

export const ThemeContext = React.createContext<ThemeContextValue | undefined>(
  undefined
);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [colorScheme, setColorScheme] = useState<
    ThemeContextValue["colorScheme"]
  >(
    typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const root = document.querySelector(":root");

    if (root && colorScheme) {
      root.setAttribute("data-color-scheme", colorScheme);
    }
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{ colorScheme, toggleColorScheme }}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (typeof context === "undefined") {
    throw new Error(
      "[useTheme]: hook must be used within the ThemeContextProvider context"
    );
  }

  return context;
};
