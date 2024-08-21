import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { initialize, mswLoader, mswDecorator } from "msw-storybook-addon";
import { handlers } from "../src/mocks/handlers";
import "../src/index.css";

// Initialize Service Worker
initialize({onUnhandledRequest: "bypass"},[...handlers]);

export const decorators = [mswDecorator];

export const parameters = {
  msw: {
    handlers: handlers,
  },
};

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    docs: {
      theme: themes.dark, 
      toc: {
        disable: false,
        headingSelector: 'h1',
        ignoreSelector: '.docs-story h1',
      }
    },
    loaders: [mswLoader],
  },
  decorators: []
};

export default preview;
