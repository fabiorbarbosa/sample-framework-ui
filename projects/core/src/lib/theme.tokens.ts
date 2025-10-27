export type LibThemeName = 'light' | 'dark';

type ThemeTokens = Record<string, string>;

const lightTokens: ThemeTokens = {
  '--lib-color-surface': '#ffffff',
  '--lib-color-surface-strong': '#f8fafc',
  '--lib-color-border': '#e2e8f0',
  '--lib-color-text': '#0f172a',
  '--lib-color-muted': '#475569',
  '--lib-color-muted-strong': '#cbd5f5',
  '--lib-color-primary': '#2563eb',
  '--lib-color-primary-hover': '#3b82f6',
  '--lib-color-on-primary': '#ffffff',
  '--lib-color-primary-soft': '#93c5fd',
  '--lib-color-secondary-bg': '#ffffff',
  '--lib-color-secondary-text': '#1e293b',
  '--lib-color-ghost-text': '#64748b',
  '--lib-color-ghost-hover': '#0f172a',
  '--lib-color-input-bg': '#ffffff',
  '--lib-color-input-border': '#e2e8f0',
  '--lib-color-input-placeholder': '#94a3b8',
  '--lib-color-hero-from': '#f0f9ff',
  '--lib-color-hero-via': '#f8fafc',
  '--lib-color-hero-to': '#eef2ff',
  '--lib-color-card-shadow': '0 15px 35px rgba(15, 23, 42, 0.08)',
};

const darkTokens: ThemeTokens = {
  '--lib-color-surface': '#0f172a',
  '--lib-color-surface-strong': '#1e293b',
  '--lib-color-border': '#334155',
  '--lib-color-text': '#f8fafc',
  '--lib-color-muted': '#cbd5f5',
  '--lib-color-muted-strong': '#818cf8',
  '--lib-color-primary': '#818cf8',
  '--lib-color-primary-hover': '#a5b4fc',
  '--lib-color-on-primary': '#0f172a',
  '--lib-color-primary-soft': '#6366f1',
  '--lib-color-secondary-bg': '#1e293b',
  '--lib-color-secondary-text': '#e2e8f0',
  '--lib-color-ghost-text': '#e2e8f0',
  '--lib-color-ghost-hover': '#ffffff',
  '--lib-color-input-bg': '#0f172a',
  '--lib-color-input-border': '#334155',
  '--lib-color-input-placeholder': '#94a3b8',
  '--lib-color-hero-from': '#1e293b',
  '--lib-color-hero-via': '#0f172a',
  '--lib-color-hero-to': '#1b1833',
  '--lib-color-card-shadow': '0 25px 50px rgba(15, 23, 42, 0.45)',
};

export const LIB_THEMES: Record<LibThemeName, ThemeTokens> = {
  light: lightTokens,
  dark: darkTokens,
};

export function applyThemeToDocument(
  doc: Document,
  theme: LibThemeName
): void {
  const tokens = LIB_THEMES[theme] ?? LIB_THEMES.light;
  const root = doc.documentElement;

  Object.entries(tokens).forEach(([token, value]) => {
    root.style.setProperty(token, value);
  });

  root.setAttribute('data-lib-theme', theme);
}
