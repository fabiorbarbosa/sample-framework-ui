import type { Preview } from '@storybook/angular';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Core', 'Card', 'Button', 'Input'],
      },
    },
    backgrounds: {
      default: 'base',
      values: [
        { name: 'base', value: '#f8fafc' },
        { name: 'dark', value: '#0f172a' }
      ],
    },
    layout: 'fullscreen',
  },
};

export default preview;
