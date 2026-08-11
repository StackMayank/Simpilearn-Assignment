import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import type { CtaBannerContent } from "@/lib/landing/types";

type CtaBannerProps = {
  content: CtaBannerContent;
};

export function CtaBanner({ content }: CtaBannerProps) {
  return (
    <section
      id="cta"
      className="bg-silver py-10 lg:flex lg:min-h-[var(--h-cta)] lg:items-center lg:py-0"
    >
      <Container className="text-center">
        <h2 className="mx-auto whitespace-pre-line text-[28px] font-semibold leading-[36px] text-[#263238] sm:text-[40px] sm:leading-[48px] lg:text-[64px] lg:leading-[76px]">
          {content.title}
        </h2>
        <div className="mt-8 flex justify-center">
          <Button
            href={content.cta.href}
            size="lg"
            className="min-w-[178px] gap-2"
          >
            {content.cta.label}
            <span aria-hidden>→</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
