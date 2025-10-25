# sample-framework-ui

Biblioteca Angular 18 composta pelas libs `core`, `card`, `button` e `input`. Todas dependem da `core`, compartilham tokens visuais via Tailwind CSS e podem ser publicadas individualmente com o `ng-packagr`.

## Scripts principais

- `npm run sync:styles`: replica o conteúdo do `style.css` raiz para cada lib (`*.styles.css`).
- `npm run build:<lib>`: executa a sincronização de estilos e roda `ng build <lib>`.
- `npm run build:libs`: gera o pacote de todas as bibliotecas na pasta `dist/`.

## Estilos

Edite somente `style.css`. Antes de buildar, execute `npm run sync:styles` (ou apenas rode `npm run build:<lib>`, que já chama a sincronização). O Tailwind está configurado em `tailwind.config.js` e habilitado para todos os templates dentro de `projects/**/*.{html,ts}`.

## Estrutura

- `projects/core`: componentes base + tokens de estilo.
- `projects/card`, `projects/button`, `projects/input`: componentes visuais que importam `CoreModule`.
- `tools/sync-styles.mjs`: utilitário que mantém os estilos alinhados em todas as libs.

Após gerar os pacotes (`npm run build:libs`), publique-os como quiser (por exemplo, `npm publish dist/card`).
