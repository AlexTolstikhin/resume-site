import type { ReactNode } from "react";

/**
 * The single source of horizontal alignment. The gutter lives on the outer
 * element and the max-width on the inner one, so every section's content edges
 * line up regardless of what background the section paints full-bleed.
 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-6 sm:px-10 ${className}`}>
      <div className="mx-auto max-w-4xl">{children}</div>
    </div>
  );
}
