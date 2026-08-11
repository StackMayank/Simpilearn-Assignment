import { Container } from "@/components/layout/Container";
import { CommunityCard } from "@/components/landing/parts/CommunityCard";
import type { CommunityContent } from "@/lib/landing/types";

type CommunityProps = {
  content: CommunityContent;
};

export function Community({ content }: CommunityProps) {
  const titleLines = content.title.split("\n");

  return (
    <section
      id="community"
      className="bg-background py-8 lg:mb-[var(--gap-community-unlock)] lg:py-0"
    >
      <Container className="text-center">
        
        <h2 className="mx-auto max-w-[20ch] text-center text-[1.75rem] font-semibold leading-[1.2] text-heading sm:max-w-none lg:text-[36px] lg:leading-[44px]">
          {titleLines.map((line) => (
            <span key={line} className="block lg:whitespace-nowrap">
              {line}
            </span>
          ))}
        </h2>
        <p className="mx-auto mt-2 max-w-[628px] text-center text-base font-normal leading-6 text-muted">
          {content.description}
        </p>

        <ul className="mt-8 flex w-full flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center lg:mt-10 lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-8">
          {content.cards.map((card) => (
            <CommunityCard key={card.title} card={card} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
