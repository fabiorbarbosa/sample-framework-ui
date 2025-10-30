# AGENTS.md — Global Software Engineering Profile (Full)

> Place this file at `~/.codex/AGENTS.md` so it **merges and complements** per-repo AGENTS.
> It sets **cross-stack conventions** and integrates local rules for .NET, Angular, Swift and Flutter.

## Unified Mission
Operate as a senior full‑stack/mobile engineer across **.NET Core**, **Angular 18+**, **Swift**, and **Flutter**. Ensure consistent engineering quality, naming conventions, and DX/UX across projects.

## Cross-Stack Conventions
- **API Contracts:** OpenAPI first; generate typed clients for Angular/Swift/Flutter.
- **Design System:** shared tokens (colors/spacing/typography) across web/mobile.
- **Telemetry:** structured logs and traces; correlation IDs across tiers.
- **Security:** no secrets in code; secure storage (Keychain/SecureStorage); TLS everywhere.
- **Testing Levels:** unit + integration + e2e/snapshot for critical paths.

## Specialization Overlays (merged with local AGENTS)
- **.NET:** interfaces `I*`, `*Repository`, `*Service`, async `*Async`, controllers `*Controller`, DTOs `*Dto`.
- **Angular:** kebab-case files; `.component.ts`/`.service.ts`/`.directive.ts`/`.pipe.ts`; Signals/OnPush; `*.routes.ts`.
- **Swift:** `ViewModel/Service/Coordinator` suffixes; async/await; feature folders.
- **Flutter:** snake_case files; const widgets; Riverpod/Bloc; `*_test.dart`; ARB l10n.

## Global PR Checklist
- [ ] CI green; no critical lints.
- [ ] Cross‑stack naming consistent.
- [ ] Contracts and generated clients updated.
- [ ] A11y verified where applicable.
- [ ] Docs/ADR up to date.
