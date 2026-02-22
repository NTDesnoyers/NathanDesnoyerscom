import { Link, useLocation } from "wouter";
import { Newsletter } from "./Newsletter";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/notes", label: "Notes" },
    { href: "/essays", label: "Essays" },
    { href: "/real-estate", label: "Real Estate" },
    { href: "/about", label: "About" },
    { href: "/in-the-arena", label: "In the Arena" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-muted-foreground/20">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
        <header className="mb-16 md:mb-24">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium tracking-tight">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a 
                  className={`
                    transition-colors hover:text-foreground
                    ${location === item.href 
                      ? "text-foreground border-b border-foreground pb-0.5" 
                      : "text-muted-foreground hover:border-b hover:border-muted-foreground/30 pb-0.5 border-transparent border-b"
                    }
                  `}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>
        </header>

        <main className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
          {children}
        </main>

        <div className="mt-32">
          <Newsletter />
        </div>

        <footer className="mt-12 pt-12 border-t border-border text-sm text-muted-foreground font-mono">
          <div className="flex justify-between items-center">
            <span>© {new Date().getFullYear()} Nathan Desnoyers</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground transition-colors">RSS</a>
              <a href="mailto:nathan@desnoyersproperties.com" className="hover:text-foreground transition-colors">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
