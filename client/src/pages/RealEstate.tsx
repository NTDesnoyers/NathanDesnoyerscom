import { Layout } from "@/components/Layout";
import { ExternalLink } from "lucide-react";

export default function RealEstate() {
  return (
    <Layout>
      <div className="max-w-2xl">
        <header className="mb-16">
          <h1 className="text-3xl font-medium mb-6">Real Estate</h1>
          <div className="h-1 w-20 bg-foreground mb-8"></div>
          <p className="text-xl font-serif leading-relaxed text-foreground/90">
            I am a licensed Realtor® in Northern Virginia, helping thoughtful people buy and sell homes with a focus on structural quality and long-term value.
          </p>
        </header>

        <section className="mb-16 space-y-6">
          <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-6">Approach</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I approach real estate like a builder, not a salesperson. I don't care about the paint color; I care about the foundation, the mechanical systems, and the land.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            My goal is to help you make a decision you will be happy with in 10 years, not just on closing day. I work best with clients who value data, patience, and structural integrity over cosmetic trends.
          </p>
        </section>

        <section className="mb-16 bg-muted/30 p-8 -mx-8 sm:mx-0 sm:rounded-none border-l-2 border-foreground">
          <h2 className="font-medium text-lg mb-4">Who I work with best</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1.5">•</span>
              <span>First-time buyers who want to understand the systems of a home.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1.5">•</span>
              <span>Sellers who want a straightforward, data-driven pricing strategy without the fluff.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-foreground mt-1.5">•</span>
              <span>Investors looking for durable assets, not quick flips.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground mb-6">Contact & Verification</h2>
          <div className="flex flex-col gap-4 text-lg">
            <p>
              <span className="text-muted-foreground w-24 inline-block font-mono text-sm">Email</span>
              <a href="mailto:hello@example.com" className="underline decoration-muted-foreground/30 hover:decoration-foreground">hello@example.com</a>
            </p>
            <p>
              <span className="text-muted-foreground w-24 inline-block font-mono text-sm">Brokerage</span>
              <span>Replit Realty, McLean VA</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-6 text-base">
              <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                Zillow Profile <ExternalLink className="w-4 h-4" />
              </a>
              <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                Google Reviews <ExternalLink className="w-4 h-4" />
              </a>
              <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
