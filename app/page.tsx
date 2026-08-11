import { Briefcase, GraduationCap } from "lucide-react";
import {
  Footer,
  Nav,
  ResumeHeader,
  SkillsSection,
  Timeline,
} from "@/app/components";
import { education, experience, profile } from "@/app/constants/resume";

export default function Home() {
  return (
    <div id="top" className="min-h-full bg-white text-ink">
      <Nav />
      <ResumeHeader />
      <main className="mx-auto max-w-4xl px-6 py-12 sm:px-10">
        <section id="summary" className="scroll-mt-20 border-b border-line pb-8">
          <h2 className="sr-only">Summary</h2>
          <p className="text-[15px] leading-relaxed text-muted">{profile.bio}</p>
        </section>
        <Timeline
          id="experience"
          icon={<Briefcase className="h-5 w-5" />}
          heading="Experience"
          entries={experience.map((job) => ({
            key: `${job.company}-${job.role}`,
            dates: job.dates,
            title: job.role,
            subtitle: job.company,
            location: job.location,
            bullets: job.bullets,
          }))}
        />
        <Timeline
          id="education"
          icon={<GraduationCap className="h-5 w-5" />}
          heading="Education"
          entries={education.map((edu) => ({
            key: edu.school,
            dates: edu.dates,
            title: edu.school,
            subtitle: edu.credential,
            location: edu.location,
          }))}
        />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}
