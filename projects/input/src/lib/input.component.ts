import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() label = 'Label';
  @Input() placeholder = 'Digite algo';
  @Input() hint?: string;
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(next: string): void {
    this.value = next;
    this.valueChange.emit(next);
  }
}
