import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
};

/**
 * Shared 1024px content band with equal side gutters (`.page-container`).
 * Used by header, footer, and every landing section.
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
