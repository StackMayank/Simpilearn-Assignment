import { Button } from "@/components/ui/Button";
import { IconImage } from "@/components/ui/IconImage";
import type { Cta, ImageAsset } from "@/lib/landing/types";

type TestimonialLogoRowProps = {
  logos: ImageAsset[];
  link: Cta;
};

/**
 * Figma Frame 14: logos + “Meet all customers →” on one horizontal row.
 * Logos share remaining width (`justify-between`) so the CTA never wraps under
 * the strip inside the 1024 band (Figma’s 41px gutters compress slightly).
 */
export function TestimonialLogoRow({ logos, link }: TestimonialLogoRowProps) {
  return (
    <div className="mt-8 flex w-full flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-8 lg:mt-8">
      <div className="flex w-full min-w-0 flex-1 flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:flex-nowrap sm:justify-between lg:justify-between">
        {logos.map((logo) => (
          <IconImage
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            size={40}
            className="shrink-0"
          />
        ))}
      </div>
      <Button
        href={link.href}
        variant="link"
        className="shrink-0 whitespace-nowrap text-base lg:text-xl"
      >
        {link.label}
        <span aria-hidden>→</span>
      </Button>
    </div>
  );
}
