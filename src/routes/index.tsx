import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Phone, Clock, MapPin, Truck, CreditCard, UtensilsCrossed, ArrowRight, Heart } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bistro Apetit — Domácí kuchyně v Českém Těšíně od roku 1994" },
      { name: "description", content: "Rodinné bistro Za kolejama v Českém Těšíně. Denní menu, rozvoz po městě zdarma nad 100 Kč, platba kartou. Vaříme s láskou už 30 let." },
      { property: "og:title", content: "Bistro Apetit — Domácí kuchyně v Českém Těšíně" },
      { property: "og:description", content: "Rodinné bistro s tradicí od roku 1994. Denní menu a rozvoz po Českém Těšíně." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroFood} alt="Domácí česká jídla z Bistra Apetit" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-background">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-background/15 backdrop-blur-sm px-4 py-1.5 text-xs font-medium text-background border border-background/20">
              <Heart className="h-3.5 w-3.5" /> Rodinné bistro od roku 1994
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-background">
              Domácí kuchyně<br />
              <span className="italic text-background/90">„Za kolejama"</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-background/85 max-w-xl leading-relaxed">
              Vaříme poctivě, jako doma. Denní menu, rozvoz po Českém Těšíně
              a 30 let zkušeností v každém talíři.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground hover:bg-accent transition-colors shadow-lg"
              >
                Denní menu <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:777808071"
                className="inline-flex items-center gap-2 rounded-full bg-background/10 backdrop-blur-sm border border-background/30 px-7 py-3.5 text-base font-semibold text-background hover:bg-background/20 transition-colors"
              >
                <Phone className="h-4 w-4" /> Objednat: 777 808 071
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO BAR */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Clock, title: "Po–Pá", desc: "8:00 — 13:00" },
            { icon: Truck, title: "Rozvoz", desc: "Zdarma nad 100 Kč" },
            { icon: CreditCard, title: "Platba", desc: "Hotově i kartou" },
            { icon: Phone, title: "Objednávky", desc: "do 10:00 hod" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* O NÁS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">Náš příběh</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Tři dekády domácí kuchyně v Českém Těšíně
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                V roce <strong className="text-foreground">1994</strong> jsme jako malý rodinný podnik
                specializovaný na domácí kuchyni začali v prostorech na Moskevské ulici v Českém
                Těšíně, poblíž náměstí, prodávat různé druhy jídel.
              </p>
              <p>
                Postupem času bylo třeba vařit více. Začaly nás vyhledávat firmy, které chtěly,
                abychom jim vařili. A tak jsme se v listopadu roku <strong className="text-foreground">2006</strong> přemístili
                na nákladní nádraží, kde pro nás byly lepší podmínky a hlavně větší kuchyně.
              </p>
              <p>
                Většině firem vaříme s radostí dodnes, tak jako našim stálým zákazníkům.
              </p>
              <p className="font-display italic text-lg text-primary pt-2">
                Vaše Bistro Apetit
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://www.bistroapetit.cz/fotogalerie/2/nahledy/182023916_129801422507710_7757920842449045215_n.jpg"
                alt="Jídlo z Bistra Apetit"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl max-w-[200px]">
              <p className="font-display text-4xl font-bold">30+</p>
              <p className="text-sm mt-1 text-primary-foreground/90">let domácího vaření</p>
            </div>
          </div>
        </div>
      </section>

      {/* INFO RIBBON */}
      <section className="bg-foreground text-background py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <UtensilsCrossed className="mx-auto h-10 w-10 text-accent" />
          <h2 className="mt-6 font-display text-3xl sm:text-4xl font-bold">Denní menu na každý den</h2>
          <p className="mt-4 text-background/80 max-w-2xl mx-auto leading-relaxed">
            Aktuální menu je vždy připraveno na portálu Meníčka.cz. Doporučujeme objednat
            předem telefonicky do <strong className="text-background">10:00</strong>, jídel se vaří jen
            omezené množství.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Zobrazit dnešní menu <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:777808071"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-7 py-3.5 text-base font-semibold text-background hover:bg-background/10 transition-colors"
            >
              <Phone className="h-4 w-4" /> 777 808 071
            </a>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">Praktické info</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground">Kdykoliv k službám</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Otevírací doba",
                lines: ["Po–Pá: 8:00 — 13:00", "So, Ne, svátky: zavřeno"],
                to: "/oteviraci-doba" as const,
                cta: "Více",
              },
              {
                icon: Truck,
                title: "Rozvoz",
                lines: ["Po Českém Těšíně", "Zdarma nad 100 Kč", "Pod 100 Kč jen 25 Kč"],
                to: "/menu" as const,
                cta: "Objednat",
              },
              {
                icon: MapPin,
                title: "Najdete nás",
                lines: ["Nákladní nádraží", "Český Těšín"],
                to: "/kontakt" as const,
                cta: "Mapa a kontakt",
              },
            ].map(({ icon: Icon, title, lines, to, cta }) => (
              <div
                key={title}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">{title}</h3>
                <ul className="mt-3 space-y-1 text-foreground/75">
                  {lines.map((l) => <li key={l}>{l}</li>)}
                </ul>
                <Link
                  to={to}
                  className="mt-6 inline-flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all"
                >
                  {cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
