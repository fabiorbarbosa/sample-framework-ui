import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@sample-framework-ui/core';

import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, CoreModule],
  exports: [CardComponent],
})
export class CardModule { }
