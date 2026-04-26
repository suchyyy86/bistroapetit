import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";

export const Route = createFileRoute("/fotogalerie")({
  head: () => ({
    meta: [
      { title: "Fotogalerie — Bistro Apetit, Český Těšín" },
      { name: "description", content: "Fotografie z Bistra Apetit v Českém Těšíně — pohled do naší kuchyně a na domácí jídla." },
      { property: "og:title", content: "Fotogalerie — Bistro Apetit" },
      { property: "og:description", content: "Podívejte se na fotky z našeho bistra a domácích jídel." },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  "https://www.bistroapetit.cz/fotogalerie/2/nahledy/182023916_129801422507710_7757920842449045215_n.jpg",
  "https://www.bistroapetit.cz/fotogalerie/2/nahledy/184399210_134387928715726_1340231925057196226_n.jpg",
  "https://www.bistroapetit.cz/fotogalerie/2/nahledy/179157946_127024512785401_5159452788378246902_n.jpg",
  "https://www.bistroapetit.cz/fotogalerie/2/nahledy/157596885_105206258300560_7309691411224978442_n.jpg",
  "https://www.bistroapetit.cz/fotogalerie/2/nahledy/174315217_126719849482534_4950526224182816445_n.jpg",
  "https://www.bistroapetit.cz/fotogalerie/2/nahledy/159247939_109407877880398_5299428072246152079_n.jpg",
];

function GalleryPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div>
      <section className="bg-secondary/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Galerie</span>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold text-foreground">Fotogalerie</h1>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            Pohled do našeho bistra a na domácí jídla, která pro vás každý den vaříme.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {photos.map((src, i) => (
              <button
                key={src}
                onClick={() => setOpen(src)}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-sm hover:shadow-xl transition-shadow"
              >
                <img
                  src={src}
                  alt={`Bistro Apetit — fotografie ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
              </button>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground italic">
            Galerie bude brzy obnovena novými fotografiemi.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute top-4 right-4 text-background hover:text-accent p-2"
            onClick={() => setOpen(null)}
            aria-label="Zavřít"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={open}
            alt="Fotografie"
            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}