import type { Preview } from "@storybook/react";

import "../lib/assets/Fonts/fonts.css";
import "../lib/global.css";

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
