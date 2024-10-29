import React from "react";
import type { Preview } from "@storybook/react";
import { type RootAttribute } from "storybook-addon-root-attributes";
import { ThemeContextProvider } from "../lib/hooks/useTheme";
import "../lib/styles/global.css";

const withThemeProvider = (Story: React.FC) => (
  <ThemeContextProvider>
    <div style={{ height: "100dvh", display: "grid", placeContent: "center" }}>
      <Story />
    </div>
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
    rootAttributes: [
      {
        attribute: "data-color-scheme",
        defaultState: {
          name: "Dark",
          value: "dark",
        },
        states: [
          {
            name: "Light",
            value: "light",
          },
        ],
      },
    ] as RootAttribute[],
  },
};

export default preview;
