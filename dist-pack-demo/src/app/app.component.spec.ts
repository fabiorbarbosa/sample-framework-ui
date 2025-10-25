import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should disable submit while feedback is empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.feedback = '';
    expect(app.canSubmit).toBeFalse();

    app.feedback = 'Nova ideia';
    expect(app.canSubmit).toBeTrue();
  });

  it('should store the last submitted message', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.feedback = 'Adicionar tema escuro';
    app.submitFeedback();

    expect(app.submittedMessage).toBe('Adicionar tema escuro');
    expect(app.feedback).toBe('');
  });
});
