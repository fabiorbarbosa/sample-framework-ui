import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lib-core-banner',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css', './core.styles.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreComponent {
  @Input() title = 'Sample Framework UI';
  @Input() subtitle = 'Coleção de componentes compartilhados com Tailwind CSS';

  readonly pills = ['Core', 'Card', 'Button', 'Input'];
}
