import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ContentImage } from "@/components/ui/ContentImage";
import type { HeroContent } from "@/lib/landing/types";

type HeroProps = {
  content: HeroContent;
};

export function Hero({ content }: HeroProps) {
  const { carousel } = content;

  return (
    <section id="home" className="hero-section">
      <Container className="flex min-h-0 flex-1 flex-col">
        <div className="flex flex-1 flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-[clamp(1.5rem,4vw,6.5rem)]">
          <div className="w-full max-w-[657px] text-center lg:shrink-0 lg:text-left">
            <h1 className="text-[2rem] font-semibold leading-10 text-heading lg:text-[64px] lg:leading-[76px]">
              {content.title}
              <br />
              <span className="text-primary">{content.titleHighlight}</span>
            </h1>
            {/* Figma 5:828 — 16/24, 16px below title */}
            <p className="mx-auto mt-4 max-w-[657px] text-base leading-6 text-muted lg:mx-0">
              {content.description}
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <Button
                href={content.cta.href}
                size="lg"
                className="min-w-[128px] px-8"
              >
                {content.cta.label}
              </Button>
            </div>
          </div>

          <div className="relative aspect-[391/407] w-full max-w-[320px] shrink-0 sm:max-w-[380px] lg:h-[407px] lg:w-[391px] lg:max-w-[min(391px,calc(100%-657px-1.5rem))] lg:min-w-0 lg:flex-1">
            <ContentImage
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="object-contain object-center lg:object-right"
              sizes="(max-width: 1023px) 380px, 391px"
              priority
              quality={95}
            />
          </div>
        </div>

        <ul className="hero-dots" aria-hidden="true">
          {Array.from({ length: carousel.slideCount }, (_, index) => {
            const isActive = index === carousel.activeIndex;
            return (
              <li key={index}>
                <span
                  className={`block size-2.5 rounded-full ${
                    isActive ? "bg-primary" : "bg-hero-dot-inactive"
                  }`}
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
