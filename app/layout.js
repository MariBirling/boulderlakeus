import "./globals.css";
import { site } from "@/data/site";

const description =
  "Boulder Lakeus on boulderointihalli Lakeudella, auki 24/7. Kertakäynnit, sarjakortit, vuosijäsenyydet ja kurssit. Boulder Porvoon sisarhalli.";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Boulder Lakeus – kiipeilyhalli, auki 24/7",
    template: "%s | Boulder Lakeus",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: "/",
    siteName: site.name,
    title: "Boulder Lakeus – kiipeilyhalli, auki 24/7",
    description,
    images: [{ url: "/assets/og.png", width: 1200, height: 630, alt: "Boulder Lakeus" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/assets/logo-nelio.png" },
};

export const viewport = { themeColor: "#0B4151" };

export default function RootLayout({ children }) {
  return (
    <html lang="fi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Roboto:wght@300;400;500&display=swap"
        />
        {/* Apply the saved theme before first paint, so the page doesn't flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
