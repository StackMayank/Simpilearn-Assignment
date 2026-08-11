"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavLink } from "@/lib/landing/types";

const DEFAULT_ACTIVE = "#home";

type HeaderNavLinksProps = {
  items: NavLink[];
  className?: string;
  onNavigate?: () => void;
};


export function HeaderNavLinks({
  items,
  className = "",
  onNavigate,
}: HeaderNavLinksProps) {
  const [activeHref, setActiveHref] = useState(DEFAULT_ACTIVE);

  useEffect(() => {
    const hrefs = new Set(items.map((item) => item.href));

    const resolveFromHash = () => {
      const hash = window.location.hash || DEFAULT_ACTIVE;
      if (hrefs.has(hash)) setActiveHref(hash);
    };

    const resolveFromScroll = () => {
      const offset = 120;
      let current = DEFAULT_ACTIVE;

      for (const item of items) {
        const id = item.href.replace(/^#/, "");
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offset) {
          current = item.href;
        }
      }

      setActiveHref(current);
    };

    resolveFromHash();
    resolveFromScroll();

    window.addEventListener("hashchange", resolveFromHash);
    window.addEventListener("scroll", resolveFromScroll, { passive: true });
    return () => {
      window.removeEventListener("hashchange", resolveFromHash);
      window.removeEventListener("scroll", resolveFromScroll);
    };
  }, [items]);

  return (
    <nav className={className} aria-label="Primary">
      {items.map((item) => {
        const isActive = item.href === activeHref;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`whitespace-nowrap rounded-[var(--radius-sm)] leading-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
              isActive
                ? "font-medium text-heading"
                : "font-normal text-heading hover:text-primary"
            }`}
            onClick={() => {
              setActiveHref(item.href);
              onNavigate?.();
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
