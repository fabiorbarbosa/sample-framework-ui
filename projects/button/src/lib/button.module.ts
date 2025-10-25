import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@sample-framework-ui/core';

import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, CoreModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
