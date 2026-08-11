import { Container } from "@/components/layout/Container";
import { AchievementStat } from "@/components/landing/parts/AchievementStat";
import type { AchievementsContent } from "@/lib/landing/types";

type AchievementsProps = {
  content: AchievementsContent;
};

/**
 * Figma 540 / 72 / 540 → equal fluid columns inside 1024 Container
 * (fixed 480+480 overflows laptop widths with gutters).
 */
export function Achievements({ content }: AchievementsProps) {
  return (
    <section className="mb-[var(--gap-body)] bg-silver py-12 lg:flex lg:min-h-[var(--h-achievements)] lg:items-center lg:py-0">
      <Container>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          <div className="w-full max-w-md text-center lg:max-w-none lg:flex-1 lg:text-left">
            <h2 className="text-heading-section lg:text-[36px] lg:leading-10">
              <span className="block">{content.title}</span>
              <span className="block text-primary">
                {content.titleHighlight}
              </span>
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
              {content.description}
            </p>
          </div>

          <ul className="grid w-full max-w-md grid-cols-2 gap-x-8 gap-y-8 sm:gap-x-12 lg:max-w-none lg:flex-1 lg:gap-x-12 lg:gap-y-10">
            {content.stats.map((stat) => (
              <AchievementStat key={stat.label} stat={stat} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
