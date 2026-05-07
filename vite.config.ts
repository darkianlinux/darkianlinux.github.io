// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { copyFileSync, rmSync, symlinkSync } from "node:fs";
import { join, resolve } from "node:path";
import type { PluginOption } from "vite";

function permanentTemporarySolution(): PluginOption {
  return {
    name: "permanent-temporary-solution",
    apply: "build",

    closeBundle() {
      const dir = resolve(__dirname, "dist/server");
      const og = join(dir, "server.js");
      const dist = join(dir, "index.js");

      copyFileSync(og, dist);
    },
  };
}

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  plugins: [permanentTemporarySolution()],
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    base: "/",
  },
});
