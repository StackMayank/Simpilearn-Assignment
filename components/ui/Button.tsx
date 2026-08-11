import type { ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  /** sm = header 40px, md/lg = Figma 52px CTAs */
  size?: ButtonSize;
  className?: string;
  /** Accessible name when visible label is short (e.g. Figma "Readmore") */
  "aria-label"?: string;
};

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const variantClasses: Record<ButtonVariant, string> = {
  primary: `inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-primary font-medium text-primary-foreground transition-colors hover:bg-primary-hover ${focusRing}`,
  ghost: `inline-flex items-center justify-center rounded-[var(--radius-sm)] font-medium text-primary transition-colors hover:bg-silver ${focusRing}`,
  link: `inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-hover ${focusRing}`,
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 min-h-10 px-5 text-sm leading-5",
  md: "h-[52px] min-h-[52px] px-8 text-base leading-6",
  lg: "h-[52px] min-h-[52px] px-8 text-base leading-6",
};

const linkSizeClasses: Record<ButtonSize, string> = {
  sm: "text-sm leading-5 py-1",
  md: "text-xl leading-7 py-1",
  lg: "text-xl leading-7 py-1",
};

function isInternalHref(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

/**
 * CTA link styled as a button. Always renders a link (`next/link` or `<a>`),
 * never a `<button>` — use a native button for non-navigation actions.
 */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const sizing = variant === "link" ? linkSizeClasses[size] : sizeClasses[size];
  const classes = `${variantClasses[variant]} ${sizing} ${className}`;

  if (isInternalHref(href)) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
