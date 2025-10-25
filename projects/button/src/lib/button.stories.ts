import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { ButtonComponent } from './button.component';
import { ButtonModule } from './button.module';

type ButtonStory = StoryObj<ButtonComponent>;

const meta: Meta<ButtonComponent> = {
  title: 'Form/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
  argTypes: {
    pressed: { action: 'pressed' },
  },
  args: {
    label: 'Enviar',
    variant: 'primary',
    disabled: false,
  },
  tags: ['autodocs'],
};

export default meta;

export const Primary: ButtonStory = {};

export const Secondary: ButtonStory = {
  args: {
    variant: 'secondary',
    label: 'Cancelar',
  },
};

export const GhostDisabled: ButtonStory = {
  args: {
    variant: 'ghost',
    disabled: true,
    label: 'Aguarde',
  },
};
