import { execSync } from "node:child_process";
import {
  mkdirSync,
  readFileSync,
  writeFileSync,
  readdirSync,
  existsSync,
} from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const tempDir = resolve(root, ".tmp");
const tailwindConfig = resolve(root, "tailwind.config.js");
const directoryPath = resolve(root, "projects");
const libs = readdirSync(directoryPath, { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map((item) => item.name);

mkdirSync(tempDir, { recursive: true });

libs.forEach((lib) => {
  const componentName = `${lib}.component`;
  const sourcePath = resolve(
    root,
    "projects",
    lib,
    "src",
    "lib",
    `${componentName}.scss`
  );

  if (!existsSync(sourcePath)) {
    return;
  }

  const compiledScssPath = resolve(
    tempDir,
    `${componentName}.compiled.css`
  );
  const tailwindOutputPath = resolve(
    tempDir,
    `${componentName}.tailwind.css`
  );
  const targetPath = resolve(
    root,
    "projects",
    lib,
    "src",
    "lib",
    `${componentName}.css`
  );

  execSync(`npx sass ${sourcePath} ${compiledScssPath} --no-source-map`, {
    stdio: "inherit",
  });

  execSync(
    `npx tailwindcss -c ${tailwindConfig} -i ${compiledScssPath} -o ${tailwindOutputPath} --minify`,
    { stdio: "inherit" }
  );

  const payload = readFileSync(tailwindOutputPath, "utf8");
  const current = existsSync(targetPath) ? readFileSync(targetPath, "utf8") : null;

  if (current === payload) {
    return;
  }

  writeFileSync(targetPath, payload);
  console.log(`✔︎ estilos sincronizados para ${lib}`);
});
