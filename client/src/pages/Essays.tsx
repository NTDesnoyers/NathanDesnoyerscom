import { Layout } from "@/components/Layout";
import { getEssays } from "@/lib/content";
import { Link } from "wouter";

export default function Essays() {
  const essays = getEssays();

  return (
    <Layout>
      <header className="mb-16">
        <h1 className="text-3xl font-medium mb-4">Essays</h1>
        <p className="text-muted-foreground text-lg max-w-xl">
          Structured, compressed writing on systems, building, and durability.
        </p>
      </header>

      <div className="grid gap-12">
        {essays.map((essay) => (
          <article key={essay.slug} className="group border-b border-border pb-12 last:border-0">
            <Link href={`/essays/${essay.slug}`}>
              <a className="block">
                <div className="mb-3">
                  <span className="font-mono text-xs text-muted-foreground">{essay.date}</span>
                </div>
                <h2 className="text-2xl font-serif font-medium mb-4 group-hover:underline decoration-muted-foreground/30 underline-offset-4">
                  {essay.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                   {essay.content.replace(/^#.*\n/, '').replace(/#/g, '').replace(/\n+/g, ' ').substring(0, 200).trim()}...
                </p>
              </a>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}
