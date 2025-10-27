# sample-framework-ui

Biblioteca Angular 18 composta pelas libs `core`, `card`, `button` e `input`. Todas dependem da `core`, compartilham tokens visuais via Tailwind CSS e podem ser publicadas individualmente com o `ng-packagr`.

## Scripts principais

- `npm run sync:styles`: compila cada `*.component.scss` com Tailwind e gera o respectivo `*.component.css`.
- `npm run build:<lib>`: executa a sincronização de estilos e roda `ng build <lib>`.
- `npm run build:libs`: gera o pacote de todas as bibliotecas na pasta `dist/`.

## Estilos

Edite apenas os arquivos `projects/<lib>/src/lib/<lib>.component.scss`. Antes de buildar, execute `npm run sync:styles` (ou apenas rode `npm run build:<lib>`, que já chama a sincronização) para gerar os `*.component.css` usados pelos componentes. O Tailwind está configurado em `tailwind.config.js` e habilitado para todos os templates dentro de `projects/**/*.{html,ts,scss}`.

## Temas

- A `ThemeService` (exportada por `@sample-framework-ui/core`) aplica tokens de cor na raiz do documento e pode alternar entre `light` e `dark`.
- Use `themeService.setTheme('dark')` para atualizar todas as libs simultaneamente ou `applyThemeToDocument(document, 'light')` em ambientes sem DI (ex.: Storybook decorators).
- O arquivo `projects/core/src/lib/core.styles.scss` concentra as variáveis CSS e mixins base. Importe-o nos SCSS das libs (`@use '../../../core/src/lib/core.styles.scss' as core;`) para herdar as mesmas superfícies, botões e campos.

## Estrutura

- `projects/core`: utilitários, serviços e tokens compartilhados (inclui `ThemeService` e `CoreModule` apenas com providers).
- `projects/card`, `projects/button`, `projects/input`: componentes visuais que dependem da `core` para carregar o tema antes de renderizar.
- `tools/sync-styles.mjs`: utilitário que mantém os estilos alinhados em todas as libs.

Após gerar os pacotes (`npm run build:libs`), publique-os como quiser (por exemplo, `npm publish dist/card`).
