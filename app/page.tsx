import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";
import { getLandingContent } from "@/lib/landing/get-landing-content";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getLandingContent();
  const title = content.meta.title;
  const description = content.meta.description;
  const ogImage = content.hero.image.src;

  return {
    title,
    description,
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      title,
      description,
      url: "/",
      siteName: "Nexcent",
      images: [{ url: ogImage, alt: content.hero.image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}


export default function HomePage() {
  return <LandingPage />;
}
