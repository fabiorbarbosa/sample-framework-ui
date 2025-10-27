import { Component } from '@angular/core';
import { LibThemeName, ThemeService } from '@sample-framework-ui/core';

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
  theme: LibThemeName = 'light';
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
      copy: 'O CardComponent aceita conteúdo projetado, permitindo misturar texto e botões mantendo espaçamento e responsividade.',
    },
    {
      eyebrow: 'Formulários',
      title: 'Entradas acessíveis',
      subtitle: 'Componentes com label, hint e estados.',
      footer: 'InputComponent + ButtonComponent',
      copy: 'Combine lib-input e lib-button para criar fluxos rápidos com estados de validação consistentes.',
    },
  ];

  feedback = '';
  submittedMessage = '';

  constructor(private readonly themeService: ThemeService) {
    this.themeService.setTheme(this.theme);
  }

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

  setTheme(theme: LibThemeName): void {
    if (this.theme === theme) {
      return;
    }

    this.theme = theme;
    this.themeService.setTheme(theme);
  }
}
