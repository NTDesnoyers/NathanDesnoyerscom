import { Layout } from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <article className="max-w-2xl mx-auto py-12">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-8">
            About
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-serif italic">
            "I’m obsessed with learning and absorbing information. That obsession leads to a lot of thoughts."
          </p>
        </header>
        
        <div className="prose-content space-y-12">
          <section>
            <p className="text-lg leading-relaxed text-foreground/90">
              For years, my thinking has been ephemeral—living in passing conversations, email threads, and Slack messages. This site is the antidote to that. It is a public lab notebook designed to make my thinking explicit, test assumptions, and create a durable record of what I am learning.
            </p>
          </section>

          <section className="bg-muted/30 p-8 border-l-2 border-foreground">
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">The Goal</h2>
            <p className="text-lg font-medium mb-4">
              The goal isn’t traffic. It’s clarity.
            </p>
            <p className="text-muted-foreground">
              By writing regularly, I aim to create a breadcrumb trail for my future self—a record of when ideas appeared, how they influenced decisions, and which heuristics proved useful.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-8">Domains of Focus</h2>
            
            <div className="grid gap-8">
              <div className="group">
                <h3 className="text-xl font-serif font-medium mb-2 group-hover:underline decoration-muted-foreground/30 underline-offset-4">Real Estate</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Understanding the physical world, housing systems, and the economics of place. I view real estate not just as transactions, but as the infrastructure of life.
                </p>
              </div>

              <div className="group">
                <h3 className="text-xl font-serif font-medium mb-2 group-hover:underline decoration-muted-foreground/30 underline-offset-4">Technology & AI</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Leveraging software to create leverage in the physical world. I am interested in how AI allows us to rewire opportunity and build connective intelligence.
                </p>
              </div>

              <div className="group">
                <h3 className="text-xl font-serif font-medium mb-2 group-hover:underline decoration-muted-foreground/30 underline-offset-4">Systems</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Designing repeatable processes that produce quality without heroic effort. Whether it's a daily routine or a business operation, the system dictates the outcome.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-12 border-t border-border mt-16">
             <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6">Colophon</h2>
             <p className="text-muted-foreground text-sm leading-relaxed font-mono">
               This site is intentionally simple. It is static. It is designed to last. No databases to maintain, no complex CMS to update—just text files, versioned over time. The constraint is the point.
             </p>
          </section>
        </div>
      </article>
    </Layout>
  );
}
