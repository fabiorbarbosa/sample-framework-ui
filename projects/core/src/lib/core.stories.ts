import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CoreComponent } from './core.component';
import { CoreModule } from './core.module';

const meta: Meta<CoreComponent> = {
  title: 'Core/Banner',
  component: CoreComponent,
  decorators: [
    moduleMetadata({
      imports: [CoreModule],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    title: 'Sample Framework UI',
    subtitle: 'Coleção de componentes compartilhados',
  },
};

export default meta;

type Story = StoryObj<CoreComponent>;

export const Default: Story = {};

export const CustomSubtitle: Story = {
  args: {
    subtitle: 'Totalmente integrado com Tailwind CSS',
  },
};
