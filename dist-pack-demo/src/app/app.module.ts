import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonComponent } from '@sample-framework-ui/button';
import { CardComponent } from '@sample-framework-ui/card';
import { CoreModule } from '@sample-framework-ui/core';
import { InputComponent } from '@sample-framework-ui/input';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, CardComponent, ButtonComponent, InputComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
