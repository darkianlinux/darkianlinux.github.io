// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { rmSync, symlinkSync } from "node:fs";
import { join, resolve } from "node:path";
import type { PluginOption } from "vite";

function permanentTemporarySolution(): PluginOption {
  return {
    name: "permanent-temporary-solution",
    apply: "build",

    closeBundle() {
      const dist = resolve(__dirname, "dist/server");
      const link = join(dist, "server.js");

      rmSync(link, { force: true });
      symlinkSync("./index.js", link);
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
