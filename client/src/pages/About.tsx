import { Layout } from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="max-w-xl">
        <h1 className="text-3xl font-medium mb-8">About</h1>
        
        <div className="prose-content">
          <p className="text-xl font-serif italic text-muted-foreground mb-12">
            "I’m a builder documenting my work and thinking over time."
          </p>

          <p>
            This website serves as a durable archive for my work in real estate, technology, AI, and systems. It is deliberately simple.
          </p>

          <p>
            In an age of ephemeral content and algorithm-driven feeds, I wanted a place that was quiet, fast, and owned by me. A place where I could think out loud without worrying about engagement metrics or SEO.
          </p>

          <h2>Domains of Focus</h2>
          
          <ul className="list-none ml-0 space-y-4">
            <li>
              <strong className="font-sans block text-foreground mb-1">Real Estate</strong>
              <span className="text-muted-foreground">Understanding the physical world, housing systems, and the economics of place.</span>
            </li>
            <li>
              <strong className="font-sans block text-foreground mb-1">Technology & AI</strong>
              <span className="text-muted-foreground">Leveraging software to create leverage in the physical world.</span>
            </li>
            <li>
              <strong className="font-sans block text-foreground mb-1">Systems</strong>
              <span className="text-muted-foreground">Designing repeatable processes that produce quality without heroic effort.</span>
            </li>
          </ul>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm font-mono text-muted-foreground">
              Built with React, Tailwind, and a philosophy of subtraction.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
