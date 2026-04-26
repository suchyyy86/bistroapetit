import { createFileRoute } from "@tanstack/react-router";
import { Clock, Phone, Truck } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/oteviraci-doba")({
  head: () => ({
    meta: [
      { title: "Otevírací doba — Bistro Apetit, Český Těšín" },
      {
        name: "description",
        content:
          "Otevírací doba Bistra Apetit: pondělí až pátek 8:00–13:00. O víkendech a svátcích zavřeno.",
      },
      { property: "og:title", content: "Otevírací doba — Bistro Apetit" },
      { property: "og:description", content: "Po–Pá 8:00–13:00. Objednávky telefonicky do 11:00." },
    ],
  }),
  component: HoursPage,
});

const days = [
  { name: "Pondělí", short: "Po", open: "8:00", close: "13:00", dayIdx: 1 },
  { name: "Úterý", short: "Út", open: "8:00", close: "13:00", dayIdx: 2 },
  { name: "Středa", short: "St", open: "8:00", close: "13:00", dayIdx: 3 },
  { name: "Čtvrtek", short: "Čt", open: "8:00", close: "13:00", dayIdx: 4 },
  { name: "Pátek", short: "Pá", open: "8:00", close: "13:00", dayIdx: 5 },
  { name: "Sobota", short: "So", open: null, close: null, dayIdx: 6 },
  { name: "Neděle", short: "Ne", open: null, close: null, dayIdx: 0 },
];

function HoursPage() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(id);
  }, []);

  const todayIdx = now?.getDay();
  const isOpen = (() => {
    if (!now) return false;
    const d = now.getDay();
    if (d === 0 || d === 6) return false;
    const minutes = now.getHours() * 60 + now.getMinutes();
    return minutes >= 8 * 60 && minutes < 13 * 60;
  })();

  return (
    <div>
      <section className="bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">
            Kdy máme otevřeno
          </span>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold text-foreground">
            Otevírací doba
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Status */}
          {now && (
            <div
              className={`flex items-center gap-3 rounded-2xl p-5 mb-8 border ${
                isOpen
                  ? "bg-emerald-500/10 border-emerald-600/30 text-emerald-900"
                  : "bg-muted border-border text-foreground"
              }`}
            >
              <div
                className={`h-3 w-3 rounded-full ${isOpen ? "bg-emerald-500 animate-pulse" : "bg-muted-foreground"}`}
              />
              <p className="font-semibold">
                {isOpen ? "Právě teď máme otevřeno" : "Právě teď máme zavřeno"}
              </p>
            </div>
          )}

          {/* Tabulka */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            {days.map((d) => {
              const isToday = todayIdx === d.dayIdx;
              return (
                <div
                  key={d.name}
                  className={`flex items-center justify-between px-6 py-4 border-b border-border last:border-0 ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && <span className="h-2 w-2 rounded-full bg-primary" />}
                    <span
                      className={`font-display text-lg ${isToday ? "font-bold text-primary" : "font-semibold text-foreground"}`}
                    >
                      {d.name}
                    </span>
                  </div>
                  <span
                    className={`text-base ${d.open ? "text-foreground" : "text-muted-foreground italic"}`}
                  >
                    {d.open ? `${d.open} — ${d.close}` : "Zavřeno"}
                  </span>
                </div>
              );
            })}
            <div className="flex items-center justify-between px-6 py-4 bg-muted/30 text-muted-foreground">
              <span className="font-medium">Státní svátky</span>
              <span className="italic">Zavřeno</span>
            </div>
          </div>

          {/* Připomenutí */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-xl p-6">
              <Phone className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                Objednávky jídla
              </h3>
              <p className="mt-1 text-sm text-foreground/70">
                Telefonicky do <strong>11:00</strong> téhož dne na{" "}
                <a href="tel:777808071" className="text-primary underline">
                  777 808 071
                </a>
                .
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <Truck className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">Rozvoz</h3>
              <p className="mt-1 text-sm text-foreground/70">
                Objednávky pro rozvoz po Č. Těšíně do <strong>11:00</strong>.
              </p>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <p className="text-sm">Vaříme od pondělí do pátku, 30 let v kuse.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
