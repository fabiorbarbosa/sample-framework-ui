import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LIB_THEMES, LibThemeName, applyThemeToDocument } from './theme.tokens';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly theme$ = new BehaviorSubject<LibThemeName>('light');
  private initialized = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  initialize(): void {
    if (this.initialized) {
      return;
    }

    this.applyCurrentTheme();
    this.initialized = true;
  }

  setTheme(theme: LibThemeName): void {
    if (!LIB_THEMES[theme]) {
      throw new Error(`Tema "${theme}" não encontrado.`);
    }

    this.theme$.next(theme);
    this.applyCurrentTheme();
  }

  get activeTheme$() {
    return this.theme$.asObservable();
  }

  getActiveTheme(): LibThemeName {
    return this.theme$.value;
  }

  private applyCurrentTheme(): void {
    applyThemeToDocument(this.document, this.theme$.value);
  }
}
