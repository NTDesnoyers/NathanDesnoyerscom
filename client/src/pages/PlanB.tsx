import { Layout } from "@/components/Layout";
import { ExternalLink } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

type Tier = 1 | 2 | 3;
type Status =
  | "Not Started"
  | "Applied"
  | "Outreach Sent"
  | "Responded"
  | "Interview"
  | "Pass";

interface Company {
  name: string;
  tier: Tier;
  role: string;
  status: Status;
  careersUrl: string;
  lastActionDate: string | null; // ISO date string or null
}

const companies: Company[] = [
  // Tier 1
  {
    name: "OpenAI",
    tier: 1,
    role: "AI Deployment Engineer",
    status: "Not Started",
    careersUrl: "https://openai.com/careers",
    lastActionDate: null,
  },
  {
    name: "Anthropic",
    tier: 1,
    role: "Applied AI Engineer",
    status: "Not Started",
    careersUrl: "https://anthropic.com/careers",
    lastActionDate: null,
  },
  {
    name: "Humans&",
    tier: 1,
    role: "AI Solutions",
    status: "Not Started",
    careersUrl: "https://humans.ai",
    lastActionDate: null,
  },
  {
    name: "xAI",
    tier: 1,
    role: "Solutions / DevRel",
    status: "Not Started",
    careersUrl: "https://x.ai/careers",
    lastActionDate: null,
  },
  // Tier 2
  {
    name: "Cursor / Anysphere",
    tier: 2,
    role: "Field Engineer",
    status: "Not Started",
    careersUrl: "https://cursor.com/careers",
    lastActionDate: null,
  },
  {
    name: "Firecrawl",
    tier: 2,
    role: "Forward Deployed Engineer",
    status: "Not Started",
    careersUrl: "https://firecrawl.dev/careers",
    lastActionDate: null,
  },
  {
    name: "Cohere",
    tier: 2,
    role: "FDE — Agentic Platform",
    status: "Not Started",
    careersUrl: "https://cohere.com/careers",
    lastActionDate: null,
  },
  {
    name: "ElevenLabs",
    tier: 2,
    role: "Forward Deployed",
    status: "Not Started",
    careersUrl: "https://elevenlabs.io/careers",
    lastActionDate: null,
  },
  {
    name: "Sierra AI",
    tier: 2,
    role: "Solutions Engineer",
    status: "Applied",
    careersUrl: "https://sierra.ai/careers",
    lastActionDate: "2026-02-22",
  },
  {
    name: "Glean",
    tier: 2,
    role: "Solutions Engineer",
    status: "Not Started",
    careersUrl: "https://glean.com/careers",
    lastActionDate: null,
  },
  // Tier 3
  {
    name: "Lofty",
    tier: 3,
    role: "AI Solutions",
    status: "Not Started",
    careersUrl: "https://lofty.com/careers",
    lastActionDate: null,
  },
  {
    name: "EliseAI",
    tier: 3,
    role: "Solutions Engineer",
    status: "Not Started",
    careersUrl: "https://eliseai.com/careers",
    lastActionDate: null,
  },
  {
    name: "Databricks",
    tier: 3,
    role: "FDE",
    status: "Not Started",
    careersUrl: "https://databricks.com/careers",
    lastActionDate: null,
  },
  {
    name: "Perplexity",
    tier: 3,
    role: "DevRel",
    status: "Not Started",
    careersUrl: "https://perplexity.ai/careers",
    lastActionDate: null,
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function daysSince(dateStr: string | null): string {
  if (!dateStr) return "no action yet";
  const then = new Date(dateStr);
  const now = new Date();
  const ms = now.getTime() - then.getTime();
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  if (days === 0) return "today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
}

// ─── Style maps ──────────────────────────────────────────────────────────────

const statusStyles: Record<Status, string> = {
  "Not Started":   "bg-zinc-100 text-zinc-500 border-zinc-200",
  "Applied":       "bg-blue-50 text-blue-700 border-blue-200",
  "Outreach Sent": "bg-amber-50 text-amber-700 border-amber-200",
  "Responded":     "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Interview":     "bg-green-100 text-green-800 border-green-300",
  "Pass":          "bg-red-50 text-red-700 border-red-200",
};

const tierLabel: Record<Tier, string> = {
  1: "🔥 Tier 1",
  2: "💪 Tier 2",
  3: "🎯 Tier 3",
};

const tierStyles: Record<Tier, string> = {
  1: "bg-orange-50 text-orange-700 border-orange-200",
  2: "bg-blue-50 text-blue-600 border-blue-200",
  3: "bg-zinc-100 text-zinc-500 border-zinc-200",
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function Badge({
  label,
  className,
}: {
  label: string;
  className: string;
}) {
  return (
    <span
      className={`inline-block font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border ${className}`}
    >
      {label}
    </span>
  );
}

function CompanyCard({ c }: { c: Company }) {
  return (
    <div className="border border-border p-5 flex flex-col gap-3 hover:border-foreground/30 transition-colors">
      {/* Tier + Status row */}
      <div className="flex flex-wrap gap-2">
        <Badge label={tierLabel[c.tier]} className={tierStyles[c.tier]} />
        <Badge label={c.status} className={statusStyles[c.status]} />
      </div>

      {/* Company name */}
      <div>
        <h3 className="font-medium text-foreground text-base leading-snug">{c.name}</h3>
        <p className="text-sm text-muted-foreground mt-0.5 font-sans">{c.role}</p>
      </div>

      {/* Footer row */}
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
        <span className="font-mono text-[11px] text-muted-foreground">
          {daysSince(c.lastActionDate)}
        </span>
        <a
          href={c.careersUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground hover:text-foreground transition-colors"
        >
          careers <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

// ─── Stats ───────────────────────────────────────────────────────────────────

function computeStats(data: Company[]) {
  return {
    applied: data.filter((c) => c.status === "Applied").length,
    responses: data.filter(
      (c) => c.status === "Responded" || c.status === "Interview"
    ).length,
    interviews: data.filter((c) => c.status === "Interview").length,
    total: data.length,
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PlanB() {
  const stats = computeStats(companies);

  return (
    <Layout>
      <article className="max-w-4xl">
        {/* ── Header ── */}
        <header className="mb-12">
          <div className="mb-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5">
              Building in public
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-foreground mb-4 leading-tight">
            In the Arena — The AI Career Hunt
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-3 max-w-2xl">
            Real estate agent → AI operator → FDE / Solutions Engineer at a frontier lab.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Updated as I apply, outreach, and get responses.
          </p>
        </header>

        {/* ── Stats bar ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-12">
          {[
            { label: "Applications", value: stats.applied },
            { label: "Responses", value: stats.responses },
            { label: "Interviews", value: stats.interviews },
            { label: "Companies tracked", value: stats.total },
          ].map(({ label, value }) => (
            <div key={label} className="bg-background px-5 py-4">
              <div className="font-mono text-2xl font-semibold text-foreground">{value}</div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mt-0.5">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Legend ── */}
        <div className="mb-8 flex flex-wrap gap-3 items-center">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mr-1">
            Status:
          </span>
          {(Object.keys(statusStyles) as Status[]).map((s) => (
            <Badge key={s} label={s} className={statusStyles[s]} />
          ))}
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16">
          {companies.map((c) => (
            <CompanyCard key={c.name} c={c} />
          ))}
        </div>

        {/* ── Story ── */}
        <section className="border-t border-border pt-12 mb-8">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">
            The Story
          </h2>
          <div className="prose-content max-w-2xl space-y-5">
            <p>
              I'm a former sales engineer (high-voltage test equipment, Western US territory) who went
              deep on real estate as a domain, then built the agentic AI OS for my own practice. That
              system — <strong>Klaus</strong>, running 24/7 on a Mac Mini — processes my calls,
              meetings, and messages into a relationship intelligence layer. I'm productizing it as{" "}
              <a href="https://memryos.io" target="_blank" rel="noopener noreferrer">
                memryOS
              </a>
              .
            </p>
            <p>
              Now I'm looking for a Forward Deployed Engineer or Solutions role at an AI company where
              I can do this <em>with</em> a team at the frontier, not just for myself.
            </p>
            <p>
              This page tracks the hunt in real time. Every application, every outreach, every
              response — logged here. No polish, no PR spin. Just the signal.
            </p>
          </div>
        </section>

        {/* ── Contact nudge ── */}
        <div className="bg-muted/30 border-l-2 border-primary/20 p-6 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
            If you're at one of these companies
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            I'd love a 15-minute call. I'm not looking for a hand — I'm looking for the right fit.
            Reach out directly:
          </p>
          <a
            href="mailto:nathan@desnoyersproperties.com"
            className="inline-flex items-center gap-2 font-mono text-sm text-foreground border-b border-foreground/30 hover:border-foreground transition-colors pb-0.5"
          >
            nathan@desnoyersproperties.com
          </a>
        </div>
      </article>
    </Layout>
  );
}
