import { Container } from "@/components/layout/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { SectionHeading } from "@/components/landing/parts/SectionHeading";
import { CLIENT_LOGOS } from "@/lib/landing/client-logo-sizes";
import type { ClientsContent } from "@/lib/landing/types";

type ClientsProps = {
  content: ClientsContent;
};

export function Clients({ content }: ClientsProps) {
  const altBySrc = new Map(content.logos.map((logo) => [logo.src, logo.alt]));

  return (
    <section className="py-10 lg:mb-[var(--gap-section)] lg:py-0">
      <Container className="text-center">
        <SectionHeading
          title={content.title}
          description={content.description}
          titleClassName="mx-auto max-w-full text-heading-section"
          descriptionClassName="mx-auto mt-2 max-w-full text-body-muted"
        />

        <ul
          className="mt-4 flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-10 lg:mt-4 lg:h-[88px] lg:flex-nowrap lg:justify-between lg:gap-0"
          aria-label="Client logos"
        >
          {CLIENT_LOGOS.map((logo) => (
            <li
              key={logo.src}
              className="flex shrink-0 items-center justify-center"
            >
              <ContentImage
                src={logo.src}
                alt={altBySrc.get(logo.src) ?? ""}
                width={logo.width}
                height={logo.height}
                className="h-auto w-auto max-h-9 object-contain lg:max-h-10"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
