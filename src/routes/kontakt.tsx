import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Bistro Apetit, Český Těšín" },
      { name: "description", content: "Kontakt na Bistro Apetit v Českém Těšíně. Telefon 777 808 071, e-mail bistroapetit@seznam.cz. Najdete nás u nákladního nádraží." },
      { property: "og:title", content: "Kontakt — Bistro Apetit" },
      { property: "og:description", content: "Kontaktní údaje, mapa a otevírací doba Bistra Apetit." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <section className="bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Spojte se s námi</span>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold text-foreground">Kontakt</h1>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            Zavolejte, napište nebo se zastavte — rádi vás přivítáme.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          {/* INFO */}
          <div className="space-y-5">
            <a
              href="tel:777808071"
              className="group flex items-start gap-4 bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/40 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Telefon</p>
                <p className="mt-1 font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  777 808 071
                </p>
                <p className="text-sm text-muted-foreground mt-1">Objednávky do 10:00</p>
              </div>
            </a>

            <a
              href="mailto:bistroapetit@seznam.cz"
              className="group flex items-start gap-4 bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/40 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">E-mail</p>
                <p className="mt-1 font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors break-all">
                  bistroapetit@seznam.cz
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-card border border-border rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Adresa</p>
                <p className="mt-1 font-display text-xl font-bold text-foreground">Nákladní nádraží</p>
                <p className="text-foreground/70">Český Těšín</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card border border-border rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Otevírací doba</p>
                <p className="mt-1 text-foreground"><strong>Po–Pá:</strong> 8:00 — 13:00</p>
                <p className="text-foreground/70"><strong>So, Ne, svátky:</strong> zavřeno</p>
              </div>
            </div>
          </div>

          {/* MAPA */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm min-h-[500px]">
            <iframe
              title="Bistro Apetit — mapa, Český Těšín"
              src="https://www.google.com/maps?q=N%C3%A1kladn%C3%AD+n%C3%A1dra%C5%BE%C3%AD+%C4%8Cesk%C3%BD+T%C4%9B%C5%A1%C3%ADn&output=embed"
              className="h-full w-full min-h-[500px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}