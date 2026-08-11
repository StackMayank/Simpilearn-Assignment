import { IconImage } from "@/components/ui/IconImage";
import type { StatItem } from "@/lib/landing/types";

type AchievementStatProps = {
  stat: StatItem;
};

/** Stat cell for the scaled 480×142 grid (icons slightly smaller to fit). */
export function AchievementStat({ stat }: AchievementStatProps) {
  return (
    <li className="flex min-w-0 items-center justify-center gap-3 lg:justify-start">
      <IconImage
        src={stat.icon.src}
        alt={stat.icon.alt}
        size={40}
        className="text-primary"
      />
      <div className="min-w-0 text-center lg:text-left">
        <p className="text-lg font-bold leading-7 text-heading sm:text-xl lg:text-2xl lg:leading-8">
          {stat.value}
        </p>
        <p className="text-sm leading-5 text-muted">
          {stat.label}
        </p>
      </div>
    </li>
  );
}
