import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const libs = ['core', 'card', 'button', 'input'];
const root = process.cwd();
const sourcePath = resolve(root, 'style.css');
const payload = readFileSync(sourcePath, 'utf8');

libs.forEach((lib) => {
  const target = resolve(root, 'projects', lib, 'src', 'lib', `${lib}.styles.css`);
  writeFileSync(target, payload);
  console.log(`✔︎ estilos sincronizados para ${lib}`);
});
