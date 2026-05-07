import { Link, Outlet } from "@tanstack/react-router";
import { DragonLogo } from "./DragonLogo";

export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <DragonLogo className="w-7 h-7 text-primary group-hover:drop-shadow-[0_0_8px_currentColor] transition-all" />
            <span className="mono font-bold text-lg tracking-tight">
              DARK<span className="text-primary">IAN</span>
            </span>
          </Link>
          <nav className="flex items-center gap-1 text-sm mono">
            {[
              { to: "/", label: "Home" },
              { to: "/download", label: "Download" },
              { to: "/compare", label: "Compare" },
              { to: "/about", label: "About" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-primary bg-primary/10" }}
                className="px-3 py-1.5 rounded-md hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://discord.gg/KTCGUQeJsn"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              Discord
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border/60 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs mono text-muted-foreground">
          <div>
            <span className="text-primary">$</span> darkian --version 2026.04 LTS
          </div>
          <div>© DARKIAN 2026 — For educational use only.</div>
        </div>
      </footer>
    </div>
  );
}
