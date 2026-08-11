import { CommunityIconBadge } from "@/components/landing/parts/CommunityIconBadge";
import type { CommunityCard as CommunityCardData } from "@/lib/landing/types";

type CommunityCardProps = {
  card: CommunityCardData;
};

export function CommunityCard({ card }: CommunityCardProps) {
  return (
    <li className="flex h-full w-full max-w-[299px] flex-col items-center rounded-md bg-background px-4 py-6 text-center shadow-card lg:max-w-none">
      <div className="flex w-full max-w-[267px] flex-col items-center">
        <CommunityIconBadge src={card.icon.src} alt={card.icon.alt} />
        
        <h3 className="mt-4 flex min-h-16 w-full items-start justify-center whitespace-pre-line text-center text-[1.375rem] font-semibold leading-8 text-heading lg:min-h-[72px] lg:text-[28px] lg:leading-9">
          {card.title}
        </h3>
      </div>
      <p className="mt-2 w-full max-w-[251px] text-center text-sm leading-5 text-muted">
        {card.description}
      </p>
    </li>
  );
}
