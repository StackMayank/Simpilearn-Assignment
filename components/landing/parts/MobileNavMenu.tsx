"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { HeaderAuthActions } from "@/components/landing/parts/HeaderAuthActions";
import { HeaderNavLinks } from "@/components/landing/parts/HeaderNavLinks";
import { MobileMenuToggle } from "@/components/landing/parts/MobileMenuToggle";
import type { HeaderContent } from "@/lib/landing/types";

type MobileNavMenuProps = {
  content: HeaderContent;
};

export function MobileNavMenu({ content }: MobileNavMenuProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="flex items-center lg:hidden">
      <MobileMenuToggle
        ref={toggleRef}
        open={open}
        controlsId={menuId}
        onToggle={() => setOpen((prev) => !prev)}
      />

      {open ? (
        <div
          id={menuId}
          className="absolute inset-x-0 top-full z-40 border-t border-border bg-background shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
        >
          <Container className="flex flex-col gap-1 py-4">
            <HeaderNavLinks
              items={content.nav}
              className="flex flex-col gap-0.5 text-base [&>a]:rounded-md [&>a]:px-3 [&>a]:py-3 [&>a]:text-left [&>a]:hover:bg-silver"
              onNavigate={() => setOpen(false)}
            />
            <HeaderAuthActions
              login={content.login}
              register={content.register}
              className="mt-3 flex flex-col gap-2 border-t border-border pt-4 sm:flex-row sm:items-center"
            />
          </Container>
        </div>
      ) : null}
    </div>
  );
}
