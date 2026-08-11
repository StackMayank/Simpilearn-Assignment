import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { HeaderAuthActions } from "@/components/landing/parts/HeaderAuthActions";
import { HeaderNavLinks } from "@/components/landing/parts/HeaderNavLinks";
import { MobileNavMenu } from "@/components/landing/parts/MobileNavMenu";
import { ContentImage } from "@/components/ui/ContentImage";
import type { HeaderContent } from "@/lib/landing/types";

type HeaderProps = {
  content: HeaderContent;
};

export function Header({ content }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-silver">
      <Container className="relative grid h-16 grid-cols-[1fr_auto] items-center gap-3 lg:h-[84px] lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="#home"
          className="relative h-6 w-[154px] justify-self-start rounded-[var(--radius-sm)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <ContentImage
            src={content.logo.src}
            alt={content.logo.alt}
            fill
            className="object-contain object-left"
            sizes="154px"
          />
        </Link>

        <HeaderNavLinks
          items={content.nav}
          className="hidden items-center gap-8 text-base lg:flex"
        />

        <div className="flex items-center justify-self-end gap-2">
          <HeaderAuthActions
            login={content.login}
            register={content.register}
            className="hidden items-center gap-3.5 lg:flex"
          />
          <MobileNavMenu content={content} />
        </div>
      </Container>
    </header>
  );
}
