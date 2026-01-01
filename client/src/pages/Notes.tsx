import { Layout } from "@/components/Layout";
import { getNotes } from "@/lib/content";
import { Link } from "wouter";

export default function Notes() {
  const notes = getNotes();

  return (
    <Layout>
      <header className="mb-16">
        <h1 className="text-3xl font-medium mb-4">Notes</h1>
        <p className="text-muted-foreground text-lg max-w-xl">
          Raw, exploratory, in-progress thinking. Listed in reverse chronological order.
        </p>
      </header>

      <div className="space-y-12 border-l border-border pl-8 ml-3 relative">
        {notes.map((note) => (
          <article key={note.slug} className="relative group">
            {/* Timeline dot */}
            <div className="absolute -left-[37px] top-1.5 w-2 h-2 rounded-full bg-border group-hover:bg-foreground transition-colors" />
            
            <Link href={`/notes/${note.slug}`}>
              <a className="block">
                <time className="font-mono text-xs text-muted-foreground block mb-1">
                  {note.date}
                </time>
                <h2 className="text-xl font-medium group-hover:underline decoration-muted-foreground/30 underline-offset-4 text-foreground">
                  {note.title}
                </h2>
              </a>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}
