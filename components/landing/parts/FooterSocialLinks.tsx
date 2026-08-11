import Link from "next/link";
import {
  getSocialIconPath,
  resolveSocialIconName,
} from "@/lib/landing/social-icons";
import type { SocialLink } from "@/lib/landing/types";

type FooterSocialLinksProps = {
  socials: SocialLink[];
};

/** Figma: 32px circles, white glyphs, Instagram → Dribbble → Twitter → YouTube. */
export function FooterSocialLinks({ socials }: FooterSocialLinksProps) {
  return (
    <ul className="flex gap-4">
      {socials.map((social) => {
        const icon = resolveSocialIconName(social.icon);
        return (
          <li key={social.label}>
            <Link
              href={social.href}
              aria-label={social.label}
              className="inline-flex size-8 items-center justify-center rounded-full bg-[#3A464E] text-white transition-colors hover:bg-[#4A565E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden
              >
                <path d={getSocialIconPath(icon)} />
              </svg>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
