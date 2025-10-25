import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from '@sample-framework-ui/button';
import { CardModule } from '@sample-framework-ui/card';
import { CoreModule } from '@sample-framework-ui/core';
import { InputModule } from '@sample-framework-ui/input';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, CardModule, ButtonModule, InputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
