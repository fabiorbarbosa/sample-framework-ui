import type { Preview } from '@storybook/angular';
import { LibThemeName, applyThemeToDocument } from '@sample-framework-ui/core';

const themeOptions: LibThemeName[] = ['light', 'dark'];

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Tema',
      description: 'Define o tema aplicado aos componentes',
      defaultValue: 'dark',
      toolbar: {
        icon: 'paintbrush',
        items: themeOptions.map((value) => ({
          value,
          title: value === 'light' ? 'Claro' : 'Escuro',
        })),
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (storyFn, context) => {
      applyThemeToDocument(
        document,
        context.globals['theme'] as LibThemeName
      );
      return storyFn();
    },
  ],
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
        { name: 'dark', value: '#0f172a' },
      ],
    },
    layout: 'fullscreen',
  },
};

export default preview;
