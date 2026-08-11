import { ContentImage } from "@/components/ui/ContentImage";
import { FooterSocialLinks } from "@/components/landing/parts/FooterSocialLinks";
import type { FooterContent } from "@/lib/landing/types";

type FooterBrandProps = {
  content: Pick<FooterContent, "logo" | "copyright" | "socials">;
  className?: string;
  logoObjectClassName?: string;
  copyrightClassName?: string;
};

export function FooterBrand({
  content,
  className = "",
  logoObjectClassName = "object-contain object-left",
  copyrightClassName = "whitespace-pre-line text-sm leading-5 ",
}: FooterBrandProps) {
  return (
    <div className={className}>
      <div className="relative h-[30px] w-[191px]">
        <ContentImage
          src={content.logo.src}
          alt={content.logo.alt}
          fill
          className={logoObjectClassName}
          sizes="191px"
        />
      </div>
      <div className={copyrightClassName}>
        {content.copyright.includes("\n") ? (
          content.copyright.split("\n").map((line) => <p className="text-[#B5B5B5]" key={line}>{line}</p>)
        ) : (
          <p>{content.copyright}</p>
        )}
      </div>
      <FooterSocialLinks socials={content.socials} />
    </div>
  );
}
