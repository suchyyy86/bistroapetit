import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl font-bold text-background">Bistro Apetit</h3>
            <p className="mt-2 text-background/70 italic">„Za kolejama" — Český Těšín</p>
            <p className="mt-4 text-sm text-background/70 max-w-md leading-relaxed">
              Domácí kuchyně s tradicí od roku 1994. Vaříme pro firmy i stálé zákazníky s láskou a
              péčí, jako bychom vařili pro sebe.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-background mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:777808071" className="hover:text-background">
                  777 808 071
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:bistroapetit@seznam.cz" className="hover:text-background break-all">
                  bistroapetit@seznam.cz
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  Bistro Apetit
                  <br />
                  areál ČD
                  <br />
                  737 01 Český Těšín
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-background mb-4">
              Otevírací doba
            </h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>Po–Pá: 8:00 — 13:00</span>
              </li>
              <li className="pl-6 text-background/60">So, Ne, svátky: zavřeno</li>
            </ul>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <Link to="/menu" className="text-background/80 hover:text-background">
                Denní menu →
              </Link>
              <Link to="/kontakt" className="text-background/80 hover:text-background">
                Kontakt →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/15 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-background/60">
          <p>© {new Date().getFullYear()} Bistro Apetit. Všechna práva vyhrazena.</p>
          <p>Domácí kuchyně z Českého Těšína</p>
        </div>
      </div>
    </footer>
  );
}
