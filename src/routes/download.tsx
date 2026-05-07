import { createFileRoute } from "@tanstack/react-router";
import { Download, HardDrive, Cpu, Globe } from "lucide-react";

export const Route = createFileRoute("/download")({
  component: DownloadPage,
  head: () => ({
    meta: [
      { title: "Download — DARKUNTU 2026.04 LTS" },
      { name: "description", content: "Download DARKUNTU ISO images. Live USB, full installer, and ARM builds available." },
    ],
  }),
});

const builds = [
  { name: "DARKUNTU Desktop", arch: "amd64", size: "3.4 GB", note: "Full toolkit, Hyprland", primary: true },
  { name: "DARKUNTU Lite", arch: "amd64", size: "1.8 GB", note: "Minimal CLI build", primary: false },
  { name: "DARKUNTU ARM", arch: "arm64", size: "2.9 GB", note: "Raspberry Pi 4 / 5", primary: false },
  { name: "DARKUNTU Live", arch: "amd64", size: "2.2 GB", note: "Boot from USB only", primary: false },
];

function DownloadPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-xs mono text-primary mb-2">// release 2026.04 — Nightshade</p>
        <h1 className="text-4xl md:text-5xl font-bold mono">Download DARKUNTU</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Choose the build that fits your hardware. All ISOs are signed with our PGP key.
          Verify your download before installation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {builds.map((b) => (
          <div
            key={b.name}
            className={`rounded-lg border p-6 shadow-card transition ${
              b.primary ? "border-primary/60 bg-card shadow-glow" : "border-border bg-card hover:border-primary/40"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold mono text-lg">{b.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 mono">{b.arch} · {b.size}</p>
                <p className="text-sm text-muted-foreground mt-3">{b.note}</p>
              </div>
              <button className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${b.primary ? "bg-red-grad text-primary-foreground" : "border border-border hover:border-primary hover:text-primary"}`}>
                <Download className="w-4 h-4" /> ISO
              </button>
            </div>
            <div className="mt-4 flex gap-4 text-xs mono text-muted-foreground">
              <a href="#" className="hover:text-primary">SHA256</a>
              <a href="#" className="hover:text-primary">torrent</a>
              <a href="#" className="hover:text-primary">signature</a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-5">
        {[
          { icon: HardDrive, title: "20 GB disk", text: "Recommended free disk space for full install with tools." },
          { icon: Cpu, title: "2 GB RAM", text: "Minimum. 8 GB recommended for heavy workloads." },
          { icon: Globe, title: "Mirrors", text: "EU, US, AS — pick the closest for fastest download." },
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
          DARKUNTU and its bundled tools are intended exclusively for learning, authorized
          penetration testing, and ethical security research. Unauthorized access to systems
          you do not own is illegal.
        </p>
      </div>
    </section>
  );
}
