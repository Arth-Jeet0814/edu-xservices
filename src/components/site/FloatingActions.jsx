import { Link } from "react-router-dom";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { contactInfo } from "@/data/site";
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="fixed right-4 bottom-20 z-40 flex flex-col gap-3 sm:bottom-6">
        {showTop ? (
          <button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="grid size-12 place-items-center rounded-full border border-border bg-background text-primary shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <ArrowUp className="size-5" />
          </button>
        ) : null}
        <a
          href={`https://wa.me/${contactInfo.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid size-13 place-items-center rounded-full bg-[oklch(0.68_0.17_150)] text-white shadow-[var(--shadow-float)] animate-pulse-glow transition-all duration-300 hover:-translate-y-1 hover:scale-110"
        >
          <MessageCircle className="size-6" />
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
        <Link
          to="/contact"
          className="bg-gradient-accent flex h-11 items-center justify-center rounded-full text-sm font-semibold text-accent-foreground btn-interactive animate-pulse-subtle shadow-md"
        >
          Book A Meeting
        </Link>
      </div>
    </>
  );
}
