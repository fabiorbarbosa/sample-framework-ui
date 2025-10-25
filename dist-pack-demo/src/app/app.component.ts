import { Component } from '@angular/core';

type FeatureCard = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  highlight?: boolean;
  footer?: string;
  copy: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly cards: FeatureCard[] = [
    {
      eyebrow: 'Design System',
      title: 'Tokens compartilhados',
      subtitle: 'Consistência visual em toda a suíte.',
      highlight: true,
      footer: 'Fornecido pelo CoreModule',
      copy: 'Utilize o CoreModule para carregar tipografia, cores e espaçamentos padrão antes de renderizar os demais componentes.',
    },
    {
      eyebrow: 'Layouts',
      title: 'Cards composables',
      subtitle: 'Ideal para listas de produtos ou destaques.',
      copy: 'O CardModule aceita conteúdo projetado, permitindo misturar texto e botões mantendo espaçamento e responsividade.',
    },
    {
      eyebrow: 'Formulários',
      title: 'Entradas acessíveis',
      subtitle: 'Componentes com label, hint e estados.',
      footer: 'InputModule + ButtonModule',
      copy: 'Combine lib-input e lib-button para criar fluxos rápidos com estados de validação consistentes.',
    },
  ];

  feedback = '';
  submittedMessage = '';

  get canSubmit(): boolean {
    return this.feedback.trim().length > 0;
  }

  submitFeedback(): void {
    const message = this.feedback.trim();
    if (!message) {
      return;
    }

    this.submittedMessage = message;
    this.feedback = '';
  }
}
