import { createFileRoute } from "@tanstack/react-router";
import { Download, HardDrive, Cpu } from "lucide-react";

export const Route = createFileRoute("/download")({
  component: DownloadPage,
  head: () => ({
    meta: [
      { title: "Download — DARKUNTU Nightshade" },
      { name: "description", content: "Download DARKUNTU Desktop — a Live CD with Cinnamon desktop and light tools from the Kali repository." },
    ],
  }),
});

function DownloadPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-xs mono text-primary mb-2">// codename — Nightshade</p>
        <h1 className="text-4xl md:text-5xl font-bold mono">Download DARKUNTU</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          A Live CD edition with the Cinnamon desktop, light tools and access to the Kali repository.
          Boot it, test it, install it.
        </p>
      </div>

      <div className="rounded-lg border border-primary/60 bg-card p-6 shadow-glow">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h3 className="font-bold mono text-lg">DARKUNTU Desktop</h3>
            <p className="text-xs text-muted-foreground mt-1 mono">amd64 · ~3.5 GB · Live CD</p>
            <p className="text-sm text-muted-foreground mt-3">
              Cinnamon desktop with light tools and the Kali repository pre-configured.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium bg-red-grad text-primary-foreground hover:opacity-95"
          >
            <Download className="w-4 h-4" /> Direct download
          </a>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-5">
        {[
          { icon: HardDrive, title: "20 GB disk", text: "Recommended free disk space for a full install with light tools." },
          { icon: Cpu, title: "2 GB RAM", text: "Minimum. 8 GB recommended for heavy workloads." },
        ].map((s, i) => (
          <div key={i} className="rounded-lg border border-border bg-card p-5">
            <s.icon className="w-5 h-5 text-primary mb-3" />
            <p className="font-semibold mono text-sm">{s.title}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg border border-primary/40 bg-primary/5 p-5 text-sm">
        <p className="mono text-primary">⚠ EDUCATIONAL USE ONLY</p>
        <p className="text-muted-foreground mt-2">
          DARKUNTU and its bundled light tools are intended exclusively for learning, authorized
          penetration testing, and ethical security research. Unauthorized access to systems
          you do not own is illegal.
        </p>
      </div>
    </section>
  );
}
