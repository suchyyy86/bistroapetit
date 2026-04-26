import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-24">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold text-primary">404</h1>
        <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">
          Stránka nenalezena
        </h2>
        <p className="mt-2 text-muted-foreground">
          Hledaná stránka neexistuje nebo byla přesunuta.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent transition-colors"
          >
            Zpět na úvod
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bistro Apetit — Domácí kuchyně, Český Těšín" },
      {
        name: "description",
        content:
          "Rodinné bistro v Českém Těšíně. Domácí denní menu, rozvoz po městě zdarma nad 100 Kč. Vaříme s láskou od roku 1994.",
      },
      { name: "author", content: "Bistro Apetit" },
      { property: "og:title", content: "Bistro Apetit — Domácí kuchyně, Český Těšín" },
      {
        property: "og:description",
        content:
          "Rodinné bistro Za kolejama. Denní menu, rozvoz po Českém Těšíně. Tradice od roku 1994.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "cs_CZ" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
      {
        rel: "shortcut icon",
        href: "/favicon.svg",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
