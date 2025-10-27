import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() label = 'Enviar';
  @Input() variant: ButtonVariant = 'primary';
  @Input() disabled = false;
  @Output() pressed = new EventEmitter<Event>();

  emitClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    this.pressed.emit(event);
  }
}

export type { ButtonVariant };
