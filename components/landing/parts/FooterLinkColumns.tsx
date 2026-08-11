import Link from "next/link";
import type { FooterLinkGroup } from "@/lib/landing/types";

type FooterLinkColumnsProps = {
  columns: FooterLinkGroup[];
  className?: string;
  columnClassName?: string;
};

export function FooterLinkColumns({
  columns,
  className = "",
  columnClassName = "",
}: FooterLinkColumnsProps) {
  return (
    <div className={className}>
      {columns.map((column) => (
        <div key={column.title} className={columnClassName}>
          <h3 className="text-xl font-semibold leading-7 text-white">
            {column.title}
          </h3>
          <ul className="flex flex-col gap-3 text-sm leading-5 text-silver">
            {column.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="rounded-[var(--radius-sm)] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
