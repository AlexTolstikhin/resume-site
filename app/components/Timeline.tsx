import type { ReactNode } from "react";
import { SectionHeading } from "./SectionHeading";

/** A row in the timeline — Experience and Education both map onto this shape. */
type TimelineEntry = {
  key: string;
  dates: string;
  title: string;
  subtitle: string;
  location?: string;
  bullets?: string[];
};

export function Timeline({
  id,
  icon,
  heading,
  entries,
}: {
  id: string;
  icon: ReactNode;
  heading: string;
  entries: TimelineEntry[];
}) {
  return (
    <section id={id} className="scroll-mt-20 pt-12">
      <SectionHeading icon={icon} heading={heading} />
      <div className="mt-8 space-y-8 border-l-2 border-line pl-8">
        {entries.map((entry) => (
          <div key={entry.key} className="relative">
            <span className="absolute top-0.5 -left-[calc(2rem+7.8px)] h-3.5 w-3.5 rotate-45 bg-navy-dark" />
            <p className="text-sm font-medium text-muted">{entry.dates}</p>
            {/* The role is the <h3>: it is the field recruiters and parsers
                weight most, so it carries the heading, not the employer. */}
            <h3 className="mt-1 text-base font-bold text-navy">
              {entry.title}
            </h3>
            <p className="text-sm font-semibold text-navy">{entry.subtitle}</p>
            {entry.location && (
              <p className="text-xs text-subtle">{entry.location}</p>
            )}
            {entry.bullets && (
              <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted">
                {entry.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden>&bull;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
