import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ContentImage } from "@/components/ui/ContentImage";
import type { FeatureSplitContent } from "@/lib/landing/types";

type FeatureSplitProps = {
  content: FeatureSplitContent;
  id?: string;
  /** Defaults to left; only pass when a section needs the opposite layout. */
  imagePosition?: "left" | "right";
};

/**
 * Image + copy split (unlock / calendar).
 * Intrinsic image width/height from content drive the box — avoids empty
 * letterboxing from a mismatched aspect-ratio (rafiki is 442×329, not 433).
 */
export function FeatureSplit({
  content,
  id,
  imagePosition = "left",
}: FeatureSplitProps) {
  const imageWidth = content.image.width ?? 442;
  const imageHeight = content.image.height ?? 329;

  const image = (
    <div className="mx-auto w-full max-w-[320px] shrink-0 sm:max-w-[400px] lg:mx-0 lg:w-[min(393px,42%)] lg:max-w-[393px]">
      <ContentImage
        src={content.image.src}
        alt={content.image.alt}
        width={imageWidth}
        height={imageHeight}
        className="h-auto w-full object-contain object-center"
        sizes="(max-width: 1023px) 400px, 393px"
      />
    </div>
  );

  const copy = (
    <div className="flex min-w-0 w-full flex-1 flex-col justify-center text-center lg:text-left">
      <h2 className="text-heading-section lg:w-[550px] xl:w-[600px]">{content.title}</h2>
      <p className="mt-4 text-sm leading-6 text-muted lg:text-[14px] lg:leading-5 lg:w-[550px] xl:w-[600px]">
        {content.description}
      </p>
      <div className="mt-8 flex justify-center lg:justify-start">
        <Button
          href={content.cta.href}
          size="md"
          className="w-full max-w-xs sm:w-auto sm:min-w-[151px]"
        >
          {content.cta.label}
        </Button>
      </div>
    </div>
  );

  return (
    <section
      id={id}
      className="py-8 lg:mb-[var(--gap-body)] lg:py-8"
    >
      <Container>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-10 xl:gap-12">
          {imagePosition === "left" ? (
            <>
              {image}
              {copy}
            </>
          ) : (
            <>
              {copy}
              {image}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
