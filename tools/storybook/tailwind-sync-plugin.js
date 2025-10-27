const { execSync } = require("node:child_process");

class TailwindSyncPlugin {
  constructor(options = {}) {
    this.root = options.root ?? process.cwd();
    this.command = options.command ?? "node tools/sync-styles.mjs";
    this.isRunning = false;
  }

  apply(compiler) {
    compiler.hooks.beforeCompile.tapPromise(
      "TailwindSyncPlugin",
      async () => {
        if (this.isRunning) {
          return;
        }

        this.isRunning = true;
        try {
          execSync(this.command, {
            cwd: this.root,
            stdio: "inherit",
          });
        } finally {
          this.isRunning = false;
        }
      }
    );
  }
}

module.exports = { TailwindSyncPlugin };
