import { createFileRoute } from "@tanstack/react-router";
import { ShieldAlert, BookOpen, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — DARKIAN" },
      {
        name: "description",
        content:
          "DARKIAN is built for ethical hackers, penetration testers, and security education. Learn about our mission.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-xs mono text-primary mb-2">// about</p>
      <h1 className="text-4xl md:text-5xl font-bold mono">For hackers who do it right.</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        DARKIAN is a community-driven Linux distribution built for one purpose: empowering{" "}
        <span className="text-foreground">ethical hackers</span>,
        <span className="text-foreground"> penetration testers</span> and
        <span className="text-foreground"> security students</span> with a fast, focused, and
        uncompromising workspace.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {[
          {
            icon: BookOpen,
            title: "Educational",
            text: "Designed for cybersecurity courses, CTFs and OSCP-style training.",
          },
          {
            icon: ShieldAlert,
            title: "Ethical",
            text: "Use only on systems you own or are authorized to test. Period.",
          },
          {
            icon: Users,
            title: "Community",
            text: "Open-source, no ads, no telemetry. Built by hackers, for hackers.",
          },
        ].map((c, i) => (
          <div key={i} className="rounded-lg border border-border bg-card p-6 shadow-card">
            <c.icon className="w-6 h-6 text-primary mb-3" />
            <h3 className="font-semibold mono">{c.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{c.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg border border-primary/40 bg-primary/5 p-6">
        <h2 className="text-xl font-bold mono text-primary">Disclaimer</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          DARKIAN is provided strictly for educational purposes and authorized security testing. Any
          use of these tools against systems without explicit, written permission is illegal and not
          endorsed by the DARKIAN project.
        </p>
      </div>
    </section>
  );
}
