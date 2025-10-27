import { TestBed } from '@angular/core/testing';

import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;
  let documentRef: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
    documentRef = TestBed.inject(DOCUMENT);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('applies document tokens when setting a theme', () => {
    const styleSpy = spyOn(documentRef.documentElement.style, 'setProperty');
    service.setTheme('dark');
    expect(styleSpy).toHaveBeenCalled();
  });
});
