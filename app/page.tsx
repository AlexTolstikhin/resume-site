import Image from "next/image";
import type { ReactNode } from "react";
// Imported rather than referenced from public/ so the URL picks up basePath
// (a string src would be emitted verbatim under images.unoptimized).
import headshot from "./headshot.png";

// Palette sampled from the reference design.
const navy = "#373D48";
const navyDark = "#252932";
const lineGray = "#D5D6D6";

const profile = {
  first: "Alex",
  last: "Tolstikhin",
  title: "Software Engineer",
  location: "Bay Area, CA",
  phone: "510.697.56.69",
  email: "alexeytolstikhin@gmail.com",
  linkedin: "https://linkedin.com/in/alexeytolstikhin",
  linkedinLabel: "linkedin.com/in/alexeytolstikhin",
  bio: "I'm a software engineer based in the Bay Area with 13+ years building web products end to end — from QA and test automation to leading frontend architecture. Over the last several years I've focused on React, Next.js, and TypeScript, shipping features across insurance and fintech products at SoFi, with an emphasis on performance, testing, and reliability.",
};

const skills = [
  {
    category: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Redux",
      "React Query",
      "Flutter",
      "Sass",
      "Less",
      "Styled Components",
      "Performance Optimization",
      "Jest",
      "React Testing Library",
      "Cypress",
      "Playwright",
    ],
  },
  {
    category: "Backend Development",
    items: ["Kotlin", "Scala", "PHP"],
  },
  {
    category: "Version Control & Collaboration",
    items: ["Git", "GitHub", "GitLab", "Bitbucket", "Jenkins", "GitHub Actions"],
  },
  {
    category: "Design & Frameworks",
    items: ["Webpack", "Bootstrap", "MUI (Material-UI)"],
  },
  {
    category: "Analytics & Monitoring",
    items: ["Optimizely", "Amplitude", "DataDog", "Kibana", "Rollbar"],
  },
  {
    category: "Soft Skills",
    items: ["Communication", "Collaboration", "UI/UX Design Principles"],
  },
];

const experience = [
  {
    company: "SoFi",
    role: "Senior Software Engineer",
    dates: "2022-09 - PRESENT",
    location: "San Francisco, CA",
    bullets: [
      "Led engineering efforts on multiple projects within the Auto and Life insurance domains, utilizing React/TypeScript, and focusing on seamless integration of new features and enhancements, resulting in increased user engagement and acquisition within respective funnels.",
      "Initiated and spearheaded the migration of the app to server-side API fetching, resulting in significant performance enhancements throughout the platform, with up to 1-second improvements in loading times on pages with heavy API usage.",
      "Implemented end-to-end Cypress tests, preventing all occurrences of accidental issue deployment to production caused by changes from other teams in external repositories.",
      "Collaborated on multiple cross-functional projects by integrating entry points in React, Next.js, Kotlin, Groovy, and Flutter repositories, contributing to an increase in leads for the insurance product.",
      "Implemented weekly Rollbar issue reviews, reducing errors by 80% through prioritized resolution during on-call weeks and efficient handling of high-priority issues.",
      "Led team effort to implement DataDog SLOs, resulting in an improvement of key feature SLOs from 99.5% to 99.9%, ensuring consistent product quality. Also served as the representative for SLO reporting and weekly updates in cross-team meetings.",
    ],
  },
  {
    company: "SoFi",
    role: "Software Engineer (Level 2)",
    dates: "2021-09 - 2022-08",
    location: "San Francisco, CA",
    bullets: [
      "Engaged in various projects within the Lantern by SoFi team, a financial marketplace and product comparison platform owned by SoFi. Leveraged Next.js for development, contributing to multiple initiatives aimed at enhancing user experience and product functionality.",
      "Utilized Optimizely for A/B testing and feature flag rollouts, enhancing product iteration and user experience.",
      "Leveraged Amplitude for in-depth analysis of feature performance and user engagement metrics, guiding product development decisions.",
      "Developed during code freeze period and introduced to the team an internal tool for seamless management of client-side A/B experiments and feature flags, streamlining testing and debugging processes.",
    ],
  },
  {
    company: "Ascendify",
    role: "Software Engineer (Level 1)",
    dates: "2016-12 - 2021-08",
    location: "San Francisco, CA",
    bullets: [
      "Played an active role in multiple React-based initiatives within a startup environment, contributing to the development of a recruiting platform aimed at serving enterprise-level clients.",
      "Directed the migration of multiple legacy components from Backbone and jQuery/PHP to React SPAs, resulting in approximately 50% of the application being successfully migrated.",
      "Implemented a transition from Redux state management to React hooks, enhancing code readability and maintainability.",
    ],
  },
  {
    company: "Ascendify",
    role: "Senior Software QA Engineer",
    dates: "2015-11 - 2016-11",
    location: "San Francisco, CA",
    bullets: [
      "Took charge of the QA team across multiple projects, optimizing the QA process and elevating the deliverable quality of the application.",
      "Pioneered performance testing protocols using JMeter, scaling API coverage from 0% to 100% to ensure thorough testing and reliability.",
      "Implemented structured QA documentation including Test Plans, Test Cases, and coverage matrix, fortifying the testing process and ensuring meticulous quality assurance.",
    ],
  },
  {
    company: "Good Technology by Blackberry",
    role: "Software QA Engineer",
    dates: "2015-02 - 2015-11",
    location: "Sunnyvale, CA",
    bullets: [
      "Specialized in ensuring the reliability and quality of the MDM tool by designing and executing test plans, conducting regression testing, and documenting software defects.",
      "Managed MDM enrolling, testing, debugging, and verification procedures, leveraging tools such as Android Debug Bridge for Android devices, Apple Configurator for iOS devices, and other relevant testing frameworks.",
    ],
  },
  {
    company: "ISD",
    role: "Junior Software QA Engineer",
    dates: "2013-01 - 2014-12",
    location: "Dnipro, Ukraine",
    bullets: [
      "Contributed to developing a hospital-focused application for generating accurate medical reports, conducting meticulous testing and documentation to ensure system reliability. Collaboratively, we enhanced the application's quality and performance, meeting critical healthcare needs.",
    ],
  },
];

const education = [
  {
    school: "UC Berkeley Extension Coding Bootcamp",
    credential: "Certificate",
    dates: "2016 - 2017",
    location: "San Francisco, CA",
  },
  {
    school: "Kyiv National University of Trade and Economics",
    credential: "Bachelor's in Management",
    dates: "2006 - 2011",
    location: "Kyiv, Ukraine",
  },
];

const navLinks = [{ href: "#top", label: "Experience" }];

export default function Home() {
  return (
    <div id="top" className="min-h-full bg-white text-[#333]">
      <Nav />
      <ResumeHeader />
      <main className="mx-auto max-w-4xl px-6 py-12 sm:px-10">
        <p className="border-b pb-8 text-[15px] leading-relaxed text-[#666]" style={{ borderColor: lineGray }}>
          {profile.bio}
        </p>
        <Timeline
          id="experience"
          icon={<BriefcaseIcon />}
          heading="Experience"
          entries={experience.map((job) => ({
            key: `${job.company}-${job.role}`,
            dates: job.dates,
            title: job.company,
            subtitle: job.role,
            location: job.location,
            bullets: job.bullets,
          }))}
        />
        <Timeline
          id="education"
          icon={<CapIcon />}
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

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur" style={{ borderColor: lineGray }}>
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="text-sm font-semibold tracking-tight" style={{ color: navy }}>
          {profile.first} {profile.last}
        </a>
        <nav className="flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b-2 pb-0.5"
              style={{ color: navy, borderColor: navy }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="rounded px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: navy }}
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}

function ResumeHeader() {
  return (
    <section className="px-6 py-12 sm:px-10 sm:py-16" style={{ backgroundColor: navy }}>
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-light text-white sm:text-5xl">
              {profile.first} <span className="font-bold">{profile.last}</span>
            </h1>
            <p className="mt-3 text-xl text-gray-300">{profile.title}</p>
          </div>
          <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-white/20 sm:h-28 sm:w-28">
            <Image
              src={headshot}
              alt={`Portrait of ${profile.first} ${profile.last}`}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-1 gap-x-12 gap-y-3 text-sm sm:grid-cols-2">
          <div className="flex gap-2">
            <dt className="font-bold text-white">Phone</dt>
            <dd className="text-gray-300">{profile.phone}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-bold text-white">Location</dt>
            <dd className="text-gray-300">{profile.location}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-bold text-white">E-mail</dt>
            <dd>
              <a href={`mailto:${profile.email}`} className="text-gray-300 hover:text-white">
                {profile.email}
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-bold text-white">LinkedIn</dt>
            <dd>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                {profile.linkedinLabel}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

type TimelineEntry = {
  key: string;
  dates: string;
  title: string;
  subtitle: string;
  location?: string;
  bullets?: string[];
};

function Timeline({
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
      <div className="mt-8 space-y-8 border-l-2 pl-8" style={{ borderColor: lineGray }}>
        {entries.map((entry) => (
          <div key={entry.key} className="relative">
            <span
              className="absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rotate-45"
              style={{ backgroundColor: navyDark }}
            />
            <p className="text-xs font-bold tracking-wide" style={{ color: navy }}>
              {entry.dates}
            </p>
            <h3 className="mt-1 text-base font-bold" style={{ color: navy }}>
              {entry.title}
            </h3>
            <p className="text-sm italic text-[#666]">{entry.subtitle}</p>
            {entry.location && (
              <p className="text-xs text-[#999]">{entry.location}</p>
            )}
            {entry.bullets && (
              <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-[#666]">
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

function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 pt-12">
      <SectionHeading icon={<ToolboxIcon />} heading="Skills" />
      <div className="mt-8 space-y-6 border-l-2 pl-8" style={{ borderColor: lineGray }}>
        {skills.map((group) => (
          <div key={group.category} className="relative">
            <span
              className="absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rotate-45"
              style={{ backgroundColor: navyDark }}
            />
            <h3 className="text-sm font-bold" style={{ color: navy }}>
              {group.category}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded bg-[#F2F2F3] px-2.5 py-1 text-xs text-[#555]"
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

function SectionHeading({ icon, heading }: { icon: ReactNode; heading: string }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="flex h-10 w-10 rotate-45 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: navyDark }}
      >
        <div className="-rotate-45 text-white">{icon}</div>
      </div>
      <h2
        className="text-xl font-bold tracking-wide uppercase"
        style={{ color: navy }}
      >
        {heading}
      </h2>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t px-6 py-8 text-center text-xs text-[#999] sm:px-10" style={{ borderColor: lineGray }}>
      &copy; {new Date().getFullYear()} {profile.first} {profile.last}
    </footer>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden="true">
      <path d="M2 9.5 12 5l10 4.5-10 4.5-10-4.5Z" />
      <path d="M6 11.5V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4.5" />
      <path d="M21 9.5V15" />
    </svg>
  );
}

function ToolboxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden="true">
      <rect x="2.5" y="8" width="19" height="11" rx="2" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M2.5 13h19" />
      <path d="M10.5 13v2.5h3V13" />
    </svg>
  );
}
