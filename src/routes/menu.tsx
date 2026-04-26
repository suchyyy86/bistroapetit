import { createFileRoute } from "@tanstack/react-router";
import { Phone, Clock, Truck, CreditCard, AlertCircle, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Denní menu — Bistro Apetit, Český Těšín" },
      { name: "description", content: "Aktuální denní menu Bistra Apetit v Českém Těšíně. Objednávky telefonicky do 10:00, rozvoz po městě zdarma nad 100 Kč." },
      { property: "og:title", content: "Denní menu — Bistro Apetit" },
      { property: "og:description", content: "Aktuální jídelní lístek a denní menu Bistra Apetit. Objednejte si telefonicky nebo online." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div>
      {/* HEADER */}
      <section className="bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Jídelní lístek</span>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold text-foreground">Denní menu</h1>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            Aktuální jídla na každý den. Data poskytuje portál Meníčka.cz.
          </p>
        </div>
      </section>

      {/* DŮLEŽITÉ INFO */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground">Důležité informace pro objednávky</h2>
                <p className="mt-2 text-foreground/80 leading-relaxed">
                  Upozorňujeme, že jídel se vaří pouze <strong>omezené množství</strong>, proto
                  je lepší si menu objednat — telefonicky na čísle{" "}
                  <a href="tel:777808071" className="text-primary font-semibold hover:underline">777 808 071</a>{" "}
                  do <strong>10:00</strong> téhož dne, nebo online přes Meníčka.cz. Děkujeme za pochopení.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Phone, title: "Objednávky", desc: "do 11:00 pro rozvoz" },
              { icon: Truck, title: "Zdarma nad 100 Kč", desc: "pod 100 Kč jen 25 Kč" },
              { icon: Clock, title: "Krabička", desc: "6 Kč / kus" },
              { icon: CreditCard, title: "Platba kartou", desc: "i v hotovosti" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-5">
                <Icon className="h-5 w-5 text-primary" />
                <p className="mt-3 font-semibold text-foreground">{title}</p>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IFRAME MENU */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <h2 className="font-display text-2xl font-semibold text-foreground">Aktuální menu</h2>
            <a
              href="https://www.menicka.cz/4932-bistro-apetit.html?t=rozvoz#m"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-accent transition-colors"
            >
              Objednat online <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
            <iframe
              src="https://www.menicka.cz/4932-bistro-apetit.html"
              title="Denní menu Bistro Apetit – Meníčka.cz"
              className="w-full bg-white"
              style={{ height: "1400px", border: 0 }}
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground text-center">
            Data poskytuje portál{" "}
            <a href="https://www.menicka.cz/4932-bistro-apetit.html" target="_blank" rel="noopener noreferrer" className="underline">Meníčka.cz</a>
          </p>
        </div>
      </section>

      {/* ZÁKONNÉ INFO */}
      <section className="border-t border-border bg-secondary/30 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <details className="group">
            <summary className="cursor-pointer font-display text-lg font-semibold text-foreground hover:text-primary">
              Informace o mimosoudním řešení spotřebitelských sporů
            </summary>
            <div className="mt-4 text-sm text-foreground/70 leading-relaxed space-y-3">
              <p className="font-semibold">Dle znění zákona o ochraně spotřebitele 634/1992, §14 odstavec 1</p>
              <p>
                (1) Prodávající informuje spotřebitele jasným, srozumitelným a snadno
                dostupným způsobem o subjektu mimosoudního řešení spotřebitelských sporů,
                který je pro daný typ nabízeného, prodávaného, poskytovaného nebo
                zprostředkovaného výrobku nebo služby věcně příslušný. Informace musí
                zahrnovat též internetovou adresu tohoto subjektu. Příslušným subjektem
                je Česká obchodní inspekce (<a href="https://www.coi.cz" target="_blank" rel="noopener noreferrer" className="underline">www.coi.cz</a>).
              </p>
            </div>
          </details>
        </div>
      </section>
    </div>
  );
}