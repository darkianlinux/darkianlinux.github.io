import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Shield, Zap, Terminal, Cpu, Lock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DARKIAN — The OS for Ethical Hackers" },
      { name: "description", content: "Dark, fast, and weaponized for security research. DARKIAN 2026 LTS — for penetration testers and ethical hackers." },
    ],
  }),
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs mono text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            v2026.04 LTS — codename "Nightshade"
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mono">
            DARK<span className="text-primary text-glow">UNTU</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            The Linux distribution forged for <span className="text-foreground">penetration testers</span>,
            <span className="text-foreground"> ethical hackers</span>, and security researchers.
            Faster than Kali. Lighter than Ubuntu. Made for the terminal.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/download" className="inline-flex items-center gap-2 bg-red-grad text-primary-foreground px-6 py-3 rounded-md font-medium shadow-glow hover:opacity-95 transition">
              <Download className="w-4 h-4" /> Download 2026.04
            </Link>
            <Link to="/compare" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-md font-medium hover:border-primary hover:text-primary transition">
              See the comparison <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-16 max-w-2xl rounded-lg border border-border bg-card/60 backdrop-blur shadow-card overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-2 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-primary/80" />
              <span className="w-3 h-3 rounded-full bg-muted" />
              <span className="w-3 h-3 rounded-full bg-muted" />
              <span className="ml-3 text-xs mono text-muted-foreground">root@darkian: ~</span>
            </div>
            <pre className="p-5 text-sm mono leading-relaxed">
<span className="text-primary">root@darkian</span>:<span className="text-muted-foreground">~#</span> whoami
<span className="text-muted-foreground">root</span>
<span className="text-primary">root@darkian</span>:<span className="text-muted-foreground">~#</span> <span className="animate-pulse">▍</span>
            </pre>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold mono">Why <span className="text-primary">DARKIAN</span>?</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">Built from the ground up for offensive security. Pre-loaded with 600+ tools.</p>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {[
            { icon: Zap, title: "Blazing Fast", text: "Custom kernel patches and zram boot in under 6s on modern hardware." },
            { icon: Shield, title: "Hardened", text: "AppArmor, secure boot, and full-disk LUKS2 encryption by default." },
            { icon: Terminal, title: "Light Tools", text: "Curated light tools with full access to the Kali repository." },
            { icon: Cpu, title: "Lightweight", text: "Runs on 2GB RAM. Sleek Hyprland or i3 sessions out of the box." },
            { icon: Lock, title: "Anonymous Mode", text: "One-toggle Tor routing, MAC randomization, and DNS over HTTPS." },
            { icon: Download, title: "Live + Persistent", text: "Boot from USB with optional encrypted persistence." },
          ].map((f, i) => (
            <div key={i} className="group rounded-lg border border-border bg-card p-6 hover:border-primary/60 transition shadow-card">
              <f.icon className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition" />
              <h3 className="font-semibold mono">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-xl border border-primary/40 bg-card p-10 md:p-14 shadow-glow">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mono">Ready to go dark?</h3>
              <p className="mt-2 text-muted-foreground max-w-xl">For educational purposes only. Use only on systems you own or have explicit permission to test.</p>
            </div>
            <Link to="/download" className="inline-flex items-center gap-2 bg-red-grad text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-95">
              <Download className="w-4 h-4" /> Get DARKIAN
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
