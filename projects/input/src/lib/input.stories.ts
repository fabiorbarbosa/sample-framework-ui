import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { InputComponent } from './input.component';

type Story = StoryObj<InputComponent>;

const meta: Meta<InputComponent> = {
  title: 'Form/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      imports: [InputComponent],
    }),
  ],
  argTypes: {
    valueChange: { action: 'valueChange' },
  },
  args: {
    label: 'Nome completo',
    placeholder: 'Ex: Maria Silva',
    hint: 'Utilize o nome que será exibido para os clientes',
    type: 'text',
    value: '',
  },
  tags: ['autodocs'],
};

export default meta;

export const Empty: Story = {};

export const WithValue: Story = {
  args: {
    value: 'João Carvalho',
  },
};

export const Password: Story = {
  args: {
    label: 'Senha',
    type: 'password',
    placeholder: '••••••••',
    hint: 'Mínimo 8 caracteres com número e símbolo',
  },
};
