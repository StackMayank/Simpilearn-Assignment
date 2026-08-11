import { Container } from "@/components/layout/Container";
import { ContentImage } from "@/components/ui/ContentImage";
import { TestimonialLogoRow } from "@/components/landing/parts/TestimonialLogoRow";
import { TestimonialQuoteBlock } from "@/components/landing/parts/TestimonialQuoteBlock";
import type { TestimonialContent } from "@/lib/landing/types";

type TestimonialProps = {
  content: TestimonialContent;
};

/**
 * Figma Customer’s — 326 image + copy; image scales down slightly on
 * tight laptop widths so the row stays horizontal inside Container.
 */
export function Testimonial({ content }: TestimonialProps) {
  return (
    <section
      id="testimonial"
      className="mb-[var(--gap-body)] bg-silver py-8 lg:flex lg:min-h-[var(--h-testimonial)] lg:items-center lg:py-8"
    >
      <Container>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-[78px]">
          <div className="relative aspect-square w-full max-w-[260px] shrink-0 overflow-hidden rounded-lg shadow-[var(--shadow-card)] sm:max-w-[300px] lg:w-[min(326px,36%)] lg:max-w-[326px]">
            <ContentImage
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="object-cover"
              sizes="326px"
              quality={95}
            />
          </div>

          <div className="flex min-w-0 w-full flex-1 flex-col text-center lg:text-left">
            <TestimonialQuoteBlock
              quote={content.quote}
              author={content.author}
              role={content.role}
            />
            <TestimonialLogoRow logos={content.logos} link={content.link} />
          </div>
        </div>
      </Container>
    </section>
  );
}
