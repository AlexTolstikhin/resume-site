import type { ReactNode } from "react";

export function SectionHeading({
  icon,
  heading,
}: {
  icon: ReactNode;
  heading: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 rotate-45 shrink-0 items-center justify-center rounded-lg bg-navy-dark">
        <div className="-rotate-45 text-white">{icon}</div>
      </div>
      <h2 className="text-xl font-bold tracking-wide text-navy uppercase">
        {heading}
      </h2>
    </div>
  );
}
