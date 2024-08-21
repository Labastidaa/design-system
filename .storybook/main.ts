import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/components/**/*.mdx", "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/react-vite",
    "@storybook/blocks",
    "msw-storybook-addon",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    defaultName: "Overview"
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  staticDirs: ["../public"],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');
    const finalConfig = mergeConfig(config, {
      build: {
        target: 'es2020',
        sourcemap: true,
      },
      define: {
        'process.env': {},
      },
      resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json','.mdx'],
      },
       optimizeDeps: {
         include: [
          'storybook-dark-mode',
          '@storybook/blocks',
          '@storybook/addon-docs',
          '@storybook/addon-interactions',
          '@storybook/addon-links',
          '@storybook/react-vite',
          'msw-storybook-addon',
          ],
       },
    });
    return finalConfig;
  }
};
export default config;
