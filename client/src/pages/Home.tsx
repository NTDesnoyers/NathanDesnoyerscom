import { Layout } from "@/components/Layout";
import { getNotes, getEssays } from "@/lib/content";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const recentNotes = getNotes().slice(0, 3);
  const recentEssays = getEssays().slice(0, 2);

  return (
    <Layout>
      <section className="mb-20">
        <h1 className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground mb-8">
          I’m a builder documenting my work and thinking over time. primarily focused on real estate, technology, AI, and systems.
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
          This site is my public lab notebook—a durable archive of what I’m learning, building, and observing.
        </p>
      </section>

      <section className="mb-16">
        <div className="flex items-baseline justify-between mb-8 border-b border-border pb-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">Recent Notes</h2>
          <Link href="/notes">
            <a className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 group">
              View all <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </a>
          </Link>
        </div>
        
        <div className="space-y-8">
          {recentNotes.map(note => (
            <article key={note.slug} className="group">
              <Link href={`/notes/${note.slug}`}>
                <a className="block">
                  <div className="font-mono text-xs text-muted-foreground mb-1">{note.date}</div>
                  <h3 className="text-lg font-medium group-hover:underline decoration-muted-foreground/30 underline-offset-4">{note.title}</h3>
                </a>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-8 border-b border-border pb-4">
          <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">Recent Essays</h2>
          <Link href="/essays">
            <a className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 group">
              View all <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </a>
          </Link>
        </div>

        <div className="space-y-10">
          {recentEssays.map(essay => (
            <article key={essay.slug} className="group">
              <Link href={`/essays/${essay.slug}`}>
                <a className="block">
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-serif font-medium group-hover:underline decoration-muted-foreground/30 underline-offset-4">{essay.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground shrink-0 ml-4">{essay.date}</span>
                  </div>
                  <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                    {essay.content.replace(/^#.*\n/, '').replace(/\n/g, ' ').substring(0, 150)}...
                  </p>
                </a>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
