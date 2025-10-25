import { execSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const libs = ['core', 'card', 'button', 'input'];
const root = process.cwd();
const sourcePath = resolve(root, 'style.css');
const tempDir = resolve(root, '.tmp');
const compiledPath = resolve(tempDir, 'tailwind.libs.css');

mkdirSync(tempDir, { recursive: true });
execSync(
  `npx tailwindcss -c ${resolve(root, 'tailwind.config.js')} -i ${sourcePath} -o ${compiledPath} --minify`,
  { stdio: 'inherit' },
);

const payload = readFileSync(compiledPath, 'utf8');

libs.forEach((lib) => {
  const target = resolve(root, 'projects', lib, 'src', 'lib', `${lib}.styles.css`);
  writeFileSync(target, payload);
  console.log(`✔︎ estilos sincronizados para ${lib}`);
});
