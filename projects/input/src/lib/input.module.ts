import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '@sample-framework-ui/core';

import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FormsModule, CoreModule],
  exports: [InputComponent],
})
export class InputModule {}
