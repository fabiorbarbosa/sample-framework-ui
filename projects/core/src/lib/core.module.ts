import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreComponent } from './core.component';

@NgModule({
  declarations: [CoreComponent],
  imports: [CommonModule],
  exports: [CoreComponent],
})
export class CoreModule {}
