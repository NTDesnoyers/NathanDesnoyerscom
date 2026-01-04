import { Layout } from "@/components/Layout";
import { content } from "@/lib/content";
import { Link } from "wouter";

export default function Home() {
  const allPosts = [...content].sort((a, b) => b.date.localeCompare(a.date));

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

      <section>
        <div className="border-b border-border pb-4 mb-8">
          <h2 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">Recent Activity</h2>
        </div>
        
        <div className="space-y-16">
          {allPosts.map(post => (
            <article key={post.slug} className="group relative">
              <Link href={`/${post.type}s/${post.slug}`}>
                <a className="block">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 md:mb-0">
                      <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border border-border text-muted-foreground group-hover:border-foreground group-hover:text-foreground transition-colors">
                        {post.type}
                      </span>
                      <time className="font-mono text-xs text-muted-foreground">{post.date}</time>
                    </div>
                  </div>
                  
                  <h3 className={`font-medium group-hover:underline decoration-muted-foreground/30 underline-offset-4 mb-3 ${post.type === 'essay' ? 'text-2xl font-serif' : 'text-xl font-sans'}`}>
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground line-clamp-3 leading-relaxed max-w-2xl">
                    {post.content
                      .replace(/^#.*\n/g, '') 
                      .replace(/^>.*\n/g, '') 
                      .replace(/[\*\_\[\]]/g, '') 
                      .replace(/\n/g, ' ')
                      .trim()
                      .substring(0, 200)}...
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
