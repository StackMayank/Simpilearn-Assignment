import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
};

/**
 * Shared content band with equal side gutters (`.page-container`).
 * Caps at 1024px under xl; 1280px at xl and up. Used by header, footer, and every landing section.
 */
export function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`page-container ${className}`.trim()}>{children}</Tag>
  );
}
