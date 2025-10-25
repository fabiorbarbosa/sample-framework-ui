# Dist Pack Demo

Aplicação Angular criada apenas para demonstrar como consumir os pacotes `.tgz` gerados em `dist-pack`. Os componentes usados (`lib-core-banner`, `lib-card`, `lib-input` e `lib-button`) são instalados localmente através de aliases npm e renderizados em `src/app/app.component.*`.

## Pré-requisitos

- Node.js ≥ 18.19 (o repositório já usa a versão 20.16.0 em `~/.local/node-v20.16.0`)
- npm 10+

## Instalação

```bash
cd dist-pack-demo
PATH=$HOME/.local/node-v20.16.0/bin:$PATH npm install
```

O `package.json` referencia os tarballs locais usando aliases, ex.: `@sample-framework-ui/core@file:../dist-pack/core.dev.24.10.2025.tgz`. Sempre que novos pacotes forem gerados, basta atualizar o caminho no `package.json` e reinstalar.

## Executar localmente

```bash
PATH=$HOME/.local/node-v20.16.0/bin:$PATH npm start
# abre em http://localhost:4200
```

## Build de produção

```bash
PATH=$HOME/.local/node-v20.16.0/bin:$PATH npm run build
```

Os artefatos ficam em `dist-pack-demo/dist/dist-pack-demo`.

## Testes unitários

```bash
PATH=$HOME/.local/node-v20.16.0/bin:$PATH npm test
```
