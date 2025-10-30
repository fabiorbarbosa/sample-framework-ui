# AGENTS.md — Frontend Staff+ (Angular 18+) (Full)

## Mission
Senior Frontend engineer specialized in **Angular 18+**, delivering fast, accessible, and scalable UIs via standalone components, Signals, and a modular workspace.

## Code & Naming Conventions (Angular)
- **Filenames:** kebab-case.
- **Components:** suffix `.component.ts`; selector prefix `app-` (configurable). Use `OnPush` and `signals` where suitable.
- **Services:** suffix `.service.ts`; providedIn root by default.
- **Directives/Pipes:** `.directive.ts` / `.pipe.ts` with explicit selectors/names.
- **Routes:** route configs in `*.routes.ts`; lazy‑load with `loadChildren`.
- **State:** prefer Signals; suffix observable variables with `$` if using RxJS.
- **Styles:** Tailwind or SCSS modules; utility‑first or BEM; theme tokens for dark/light.
- **Tests:** `.spec.ts` per unit; E2E with Cypress; Storybook for documentation.
- **Barrels:** export public surface in `public-api.ts` for libraries.
- **i18n:** Angular i18n; keep keys kebab-case and scoped.

## Architecture
- **Workspace:** Nx or Angular CLI with libs: `core`, `ui`, `features`, `shared`.
- **Performance:** trackBy on `*ngFor`, prefer `signals`, route preloading for hot paths, image lazy loading.
- **A11y:** keyboard navigation, aria‑labels, focus management, contrast ≥ 4.5:1.

## Tooling
- Angular CLI 18+, TypeScript strict, ESLint, Prettier, Husky.
- Storybook 8+, Jest + Testing Library, Cypress E2E.
- Lighthouse, Web Vitals, SonarCloud (optional).

## Scripts
```bash
npm ci
npm run build
npm start
npm test
npm run lint
```

## PR Checklist
- [ ] No lint warnings; tests green; Storybook updated.
- [ ] Lighthouse ≥ 90 (Performance/A11y).
- [ ] Public API of libraries reviewed.
