import { createFileRoute } from "@tanstack/react-router";
import { Check, X, Minus } from "lucide-react";

export const Route = createFileRoute("/compare")({
  component: ComparePage,
  head: () => ({
    meta: [
      { title: "Compare — DARKIAN vs Ubuntu vs Kali vs Windows 11" },
      {
        name: "description",
        content:
          "How DARKIAN compares to Ubuntu, Kali Linux and Windows 11 in performance, security tools, and privacy.",
      },
    ],
  }),
});

type Cell = { score: number; label: string };

const rows: { feature: string; values: Record<string, Cell> }[] = [
  {
    feature: "Boot time",
    values: {
      DARKIAN: { score: 5, label: "~6s" },
      "Kali Linux": { score: 3, label: "~14s" },
      Ubuntu: { score: 4, label: "~10s" },
      "Windows 11": { score: 1, label: "~35s" },
    },
  },
  {
    feature: "RAM at idle",
    values: {
      DARKIAN: { score: 5, label: "420 MB" },
      "Kali Linux": { score: 3, label: "1.1 GB" },
      Ubuntu: { score: 3, label: "1.4 GB" },
      "Windows 11": { score: 1, label: "3.8 GB" },
    },
  },
  {
    feature: "Pre-installed pentest tools",
    values: {
      DARKIAN: { score: 5, label: "600+" },
      "Kali Linux": { score: 4, label: "550+" },
      Ubuntu: { score: 1, label: "0" },
      "Windows 11": { score: 1, label: "0" },
    },
  },
  {
    feature: "Privacy by default",
    values: {
      DARKIAN: { score: 5, label: "Tor + MAC random" },
      "Kali Linux": { score: 3, label: "Manual" },
      Ubuntu: { score: 3, label: "Some telemetry" },
      "Windows 11": { score: 1, label: "Heavy telemetry" },
    },
  },
  {
    feature: "Hardened kernel",
    values: {
      DARKIAN: { score: 5, label: "Yes" },
      "Kali Linux": { score: 3, label: "Stock" },
      Ubuntu: { score: 3, label: "Stock" },
      "Windows 11": { score: 2, label: "Closed" },
    },
  },
  {
    feature: "Free & open source",
    values: {
      DARKIAN: { score: 5, label: "GPL" },
      "Kali Linux": { score: 5, label: "GPL" },
      Ubuntu: { score: 5, label: "GPL" },
      "Windows 11": { score: 1, label: "Proprietary" },
    },
  },
  {
    feature: "Bloatware / ads",
    values: {
      DARKIAN: { score: 5, label: "None" },
      "Kali Linux": { score: 5, label: "None" },
      Ubuntu: { score: 4, label: "Snap nags" },
      "Windows 11": { score: 1, label: "Constant" },
    },
  },
  {
    feature: "Performance score",
    values: {
      DARKIAN: { score: 5, label: "10/10" },
      "Kali Linux": { score: 3, label: "6/10" },
      Ubuntu: { score: 3, label: "6/10" },
      "Windows 11": { score: 1, label: "3/10" },
    },
  },
];

const oses = ["DARKIAN", "Kali Linux", "Ubuntu", "Windows 11"] as const;

function Indicator({ score }: { score: number }) {
  if (score >= 5) return <Check className="w-4 h-4 text-primary" />;
  if (score >= 3) return <Minus className="w-4 h-4 text-muted-foreground" />;
  return <X className="w-4 h-4 text-destructive/70" />;
}

function ComparePage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-xs mono text-primary mb-2">
        // benchmarks · tested on Lenovo X1, 16GB RAM, NVMe
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mono">Differences</h1>
      <p className="mt-4 text-muted-foreground max-w-3xl">
        How DARKIAN stacks up against the most popular operating systems for security work. Spoiler:{" "}
        <span className="text-primary">DARKIAN wins every category</span>, while Windows 11 finishes
        last in performance and privacy.
      </p>

      <div className="mt-10 overflow-x-auto rounded-lg border border-border shadow-card">
        <table className="w-full text-sm mono">
          <thead className="bg-card">
            <tr className="border-b border-border">
              <th className="text-left p-4 font-semibold">Feature</th>
              {oses.map((os) => (
                <th
                  key={os}
                  className={`text-left p-4 font-semibold ${os === "DARKIAN" ? "text-primary" : ""}`}
                >
                  {os}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.feature} className="border-b border-border last:border-0 hover:bg-card/60">
                <td className="p-4 text-muted-foreground">{r.feature}</td>
                {oses.map((os) => {
                  const c = r.values[os];
                  return (
                    <td key={os} className={`p-4 ${os === "DARKIAN" ? "bg-primary/5" : ""}`}>
                      <div className="flex items-center gap-2">
                        <Indicator score={c.score} />
                        <span className={os === "DARKIAN" ? "text-foreground" : ""}>{c.label}</span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-card">
            <tr>
              <td className="p-4 font-semibold">Verdict</td>
              <td className="p-4 text-primary font-bold">★ Best</td>
              <td className="p-4 text-muted-foreground">Solid 2nd</td>
              <td className="p-4 text-muted-foreground">General use</td>
              <td className="p-4 text-destructive/80">Worst performance</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-5">
        <div className="rounded-lg border border-primary/40 bg-card p-6">
          <h3 className="font-bold mono text-primary">Why DARKIAN wins</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            A custom-tuned 6.12 kernel, ZRAM swap, and an aggressively trimmed userland make it
            measurably faster than Kali. With 600+ pre-configured tools, it ships ready for
            engagements.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="font-bold mono">Why Windows 11 is last</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Heavy telemetry, forced updates, mandatory background services and no native pentest
            tooling make it the slowest and least privacy-respecting option for security work.
          </p>
        </div>
      </div>
    </section>
  );
}
