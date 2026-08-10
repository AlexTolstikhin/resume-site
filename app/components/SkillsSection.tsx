import { Wrench } from "lucide-react";
import { skills } from "@/app/constants/resume";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 pt-12">
      <SectionHeading icon={<Wrench className="h-5 w-5" />} heading="Skills" />
      <div className="mt-8 space-y-6 border-l-2 border-line pl-8">
        {skills.map((group) => (
          <div key={group.category} className="relative">
            <span className="absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rotate-45 bg-navy-dark" />
            <h3 className="text-sm font-bold text-navy">{group.category}</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded bg-tag px-2.5 py-1 text-xs text-tag-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
