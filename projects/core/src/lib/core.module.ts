import { APP_INITIALIZER, NgModule } from '@angular/core';

import { ThemeService } from './theme.service';

function initializeTheme(themeService: ThemeService) {
  return () => themeService.initialize();
}

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeTheme,
      deps: [ThemeService],
      multi: true,
    },
  ],
})
export class CoreModule {}
