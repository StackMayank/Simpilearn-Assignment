import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { SkipLink } from "@/components/landing/parts/SkipLink";
import { getLandingContent } from "@/lib/landing/get-landing-content";
import "@/styles/index.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nexcent",
    template: "%s | Nexcent",
  },
  description: "Nexcent landing page",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4caf4f",
};

/** Document root + shared chrome (header/footer) for all routes. */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = await getLandingContent();

  return (
    // Extensions (e.g. ColorZilla) inject attrs onto html/body before hydrate.
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full font-sans" suppressHydrationWarning>
        <SkipLink />
        <Header content={content.header} />
        {children}
        <Footer content={content.footer} />
      </body>
    </html>
  );
}
