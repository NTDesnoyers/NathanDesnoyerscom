import { Layout } from "@/components/Layout";
import { Mail } from "lucide-react";

export default function RealEstate() {
  return (
    <Layout>
      <article className="max-w-2xl mx-auto py-12">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-8">
            Real Estate
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-serif italic">
            "I work in real estate as a way of rewiring how opportunity flows — between people, timing, information, and long-term goals."
          </p>
        </header>

        <div className="prose-content space-y-12">
          <section>
            <p className="text-lg leading-relaxed text-foreground/90">
              Based in Northern Virginia, I help buyers, sellers, and investors make thoughtful real estate decisions during moments of change. Sometimes that change is obvious. Sometimes it’s just beginning to surface. Either way, my role is to help bring clarity to the moment and perspective to the decision.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 mt-6">
              I don’t believe every conversation needs to end in a transaction. I do believe every conversation should create more understanding.
            </p>
          </section>

          <section className="bg-muted/30 p-8 border-l-2 border-primary/20">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">My Philosophy</h2>
            <p className="mb-6">
              I practice real estate through the lens of <strong>Ninja Selling</strong> — a relationship-first approach built on value, curiosity, and service.
            </p>
            <p className="mb-4">That means:</p>
            <ul className="space-y-3 list-none pl-0">
              <li className="flex gap-3 items-start italic text-foreground/80">
                <span className="text-primary mt-1">—</span> Listening for life changes, not chasing deals
              </li>
              <li className="flex gap-3 items-start italic text-foreground/80">
                <span className="text-primary mt-1">—</span> Focusing on flow, not pressure
              </li>
              <li className="flex gap-3 items-start italic text-foreground/80">
                <span className="text-primary mt-1">—</span> Prioritizing trust and long-term relationships over short-term wins
              </li>
            </ul>
            <p className="mt-8">
              I see real estate as one part of a much bigger system: family, work, finances, timing, and personal goals. When those pieces are aligned, opportunity flows more naturally — and decisions feel easier to stand behind.
            </p>
            <p className="mt-4 font-medium">My job is to help you see the full picture before you act.</p>
          </section>

          <section>
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">How I Work</h2>
            <p className="mb-6">I aim to be calm, informed, and honest — especially when the stakes are high.</p>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="border border-border p-6 rounded-sm">
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex gap-4">
                    <span className="font-mono text-xs text-muted-foreground mt-1">01</span>
                    <span>Asking good questions before offering advice</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-xs text-muted-foreground mt-1">02</span>
                    <span>Using data to ground decisions, not rush them</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-xs text-muted-foreground mt-1">03</span>
                    <span>Helping you understand tradeoffs, not just outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-6 italic text-muted-foreground">
              Whether we end up working together or not, I want you to leave the conversation clearer than when you arrived.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">Who This Tends to Work Well For</h2>
            <p className="mb-6">I’m usually a good fit for people who:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Are navigating change and want a grounded perspective</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Value patience, clarity, and long-term thinking</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Care more about making the right decision than making a fast one</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              This includes first-time buyers, sellers seeking a straightforward strategy, and investors focused on durable opportunity — but the common thread is mindset, not category.
            </p>
          </section>

          <section className="pt-12 border-t border-border">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">Next Step</h2>
            <p className="mb-8 text-lg">
              If any of this resonates and you’re curious about working together — or simply want to talk through a real estate decision — feel free to reach out.
            </p>
            
            <a 
              href="mailto:nathan@desnoyersproperties.com" 
              className="inline-flex items-center gap-3 px-6 py-4 border border-foreground bg-foreground text-background hover:bg-background hover:text-foreground transition-all group"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">nathan@desnoyersproperties.com</span>
            </a>
            
            <p className="mt-6 text-sm font-mono text-muted-foreground">
              No pressure. Just a conversation.
            </p>
          </section>
        </div>
      </article>
    </Layout>
  );
}
