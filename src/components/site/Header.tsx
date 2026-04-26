import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { to: "/", label: "Domů" },
  { to: "/menu", label: "Denní menu" },
  { to: "/oteviraci-doba", label: "Otevírací doba" },
  { to: "/fotogalerie", label: "Fotogalerie" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex flex-col leading-none group">
            <span className="font-display text-2xl sm:text-3xl font-bold text-primary group-hover:text-accent transition-colors">
              Bistro Apetit
            </span>
            <span className="text-xs italic text-muted-foreground tracking-wide">
              „Za kolejama" — od roku 1994
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-secondary"
                activeProps={{ className: "px-4 py-2 text-sm font-semibold text-primary rounded-md bg-secondary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:777808071"
              className="ml-3 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-accent transition-colors shadow-sm"
            >
              <Phone className="h-4 w-4" />
              777 808 071
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary"
            aria-label="Otevřít menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 pt-2 border-t border-border animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-md"
                  activeProps={{ className: "px-4 py-3 text-base font-semibold text-primary bg-secondary rounded-md" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:777808071"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" />
                777 808 071
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}