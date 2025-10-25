import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', './card.styles.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() title = 'Título do card';
  @Input() subtitle?: string;
  @Input() eyebrow = 'Card';
  @Input() footer?: string;
  @Input() highlight = false;
}
