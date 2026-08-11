import { Container } from "@/components/layout/Container";
import { FooterBrand } from "@/components/landing/parts/FooterBrand";
import { FooterLinkColumns } from "@/components/landing/parts/FooterLinkColumns";
import { FooterNewsletter } from "@/components/landing/parts/FooterNewsletter";
import type { FooterContent } from "@/lib/landing/types";

type FooterProps = {
  content: FooterContent;
};

/**
 * Figma Footer / Big / 4 scaled to 1024 band.
 * Brand 311 | Company auto | Support auto | Newsletter 255 — equal gutters.
 */
export function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <Container className="py-12 lg:flex lg:min-h-[var(--h-footer)] lg:items-center lg:py-16">
        <div
          className="
            grid w-full grid-cols-1 items-start gap-10 text-center
            sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:text-left
            lg:grid-cols-[311px_auto_auto_255px] lg:justify-between lg:gap-x-0 lg:gap-y-0
          "
        >
          <FooterBrand
            content={content}
            className="flex flex-col items-center gap-10 sm:col-span-2 sm:items-start lg:col-span-1 lg:items-start lg:gap-10"
            logoObjectClassName="object-contain object-center sm:object-left"
            copyrightClassName="max-w-[280px] whitespace-pre-line text-sm leading-5 text-silver"
          />

          <FooterLinkColumns
            columns={content.columns}
            className="contents"
            columnClassName="flex flex-col items-center gap-6 sm:items-start"
          />

          <FooterNewsletter
            title={content.newsletter.title}
            placeholder={content.newsletter.placeholder}
            submitLabel={content.newsletter.submitLabel}
            className="mx-auto flex w-full max-w-[255px] flex-col items-center gap-6 sm:col-span-2 sm:mx-0 sm:items-start lg:col-span-1 lg:w-[255px]"
          />
        </div>
      </Container>
    </footer>
  );
}
