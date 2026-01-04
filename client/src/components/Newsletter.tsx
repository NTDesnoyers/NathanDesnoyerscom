import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Kit (ConvertKit) Form Submission
    const FORM_ID = "53ccc14c30";
    const API_URL = `https://app.kit.com/forms/${FORM_ID}/subscriptions`;

    const formData = new FormData();
    formData.append("email_address", email);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting to Kit:", error);
      setStatus("error");
    }
  };

  return (
    <section className="border-t border-border py-16 bg-muted/20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-serif text-2xl font-medium mb-3">Join the newsletter</h2>
            <p className="text-muted-foreground leading-relaxed">
              Get new essays and notes delivered to your inbox. No spam, just thinking.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="relative">
            <div className="flex gap-2">
              <input
                type="email"
                required
                placeholder="email@address.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                disabled={status === "success"}
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="bg-foreground text-background px-6 py-3 hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <span className="opacity-0">Subscribe</span> 
                ) : status === "success" ? (
                  "Joined"
                ) : (
                  "Subscribe"
                )}
                
                {status === "loading" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                  </div>
                )}
              </button>
            </div>
            {status === "success" && (
              <p className="absolute top-full mt-2 text-xs font-mono text-emerald-600">
                Success. You've been added to the list.
              </p>
            )}
            <p className="absolute top-full mt-2 text-[10px] text-muted-foreground/60 uppercase tracking-widest font-mono">
              Unsubscribe at any time
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
