import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-designs",
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
    "storybook-addon-render-modes",
    "storybook-addon-root-attributes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: { viteConfigPath: resolve(__dirname, "../vite.config") },
    },
  },
};
export default config;
