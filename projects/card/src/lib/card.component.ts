import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <p>
      card works!
    </p>
  `,
  styles: ``
})
export class CardComponent {

}
