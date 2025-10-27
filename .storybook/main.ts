import type { StorybookConfig } from '@storybook/angular';
import { resolve } from 'node:path';
import { TailwindSyncPlugin } from '../tools/storybook/tailwind-sync-plugin';

const config: StorybookConfig = {
  stories: [
    '../projects/**/*.mdx',
    '../projects/**/*.stories.@(ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (baseConfig) => {
    baseConfig.plugins = baseConfig.plugins ?? [];
    baseConfig.plugins.push(
      new TailwindSyncPlugin({
        root: resolve(__dirname, '..'),
        command: 'node tools/sync-styles.mjs',
      })
    );
    return baseConfig;
  },
};

export default config;
