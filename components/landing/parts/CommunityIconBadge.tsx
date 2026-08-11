import { IconImage } from "@/components/ui/IconImage";

type CommunityIconBadgeProps = {
  src: string;
  alt: string;
};

export function CommunityIconBadge({ src, alt }: CommunityIconBadgeProps) {
  return (
    <span className="relative inline-block h-[56px] w-[65px] shrink-0">
      <span
        aria-hidden
        className="pointer-events-none absolute left-[15px] top-[7px] h-[49px] w-[50px] bg-primary-soft"
        style={{ borderRadius: "18px 5px 10px 5px" }}
      />
      <span className="absolute left-0 top-0 z-10">
        <IconImage src={src} alt={alt} size={48} />
      </span>
    </span>
  );
}
