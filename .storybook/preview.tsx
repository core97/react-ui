import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeContextProvider } from "../lib/hooks/useTheme";
import "../lib/styles/global.css";

const withThemeProvider = (Story: React.FC) => (
  <ThemeContextProvider>
    <Story />
  </ThemeContextProvider>
);

export const decorators = [withThemeProvider];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
