import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { CardComponent } from './card.component';
import { CardModule } from './card.module';

const meta: Meta<CardComponent & { body?: string }> = {
  title: 'Card/CardComponent',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [CardModule],
    }),
  ],
  tags: ['autodocs'],
  args: {
    eyebrow: 'Card',
    title: 'Crie visuais consistentes',
    subtitle: 'Combine o componente com conteúdos dinâmicos.',
    footer: 'Atualizado há 2h',
    highlight: false,
    body: 'Você pode projetar qualquer conteúdo dentro do componente mantendo o espaçamento e tipografia padronizados.',
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-card
        [eyebrow]="eyebrow"
        [title]="title"
        [subtitle]="subtitle"
        [footer]="footer"
        [highlight]="highlight"
      >
        <p>{{ body }}</p>
      </lib-card>
    `,
  }),
};

export default meta;

type Story = StoryObj<CardComponent & { body?: string }>;

export const Default: Story = {};

export const Highlighted: Story = {
  args: {
    highlight: true,
    eyebrow: 'Destaque',
    title: 'Mostre o que importa',
    footer: 'Aproveite o modo destaque',
  },
};
