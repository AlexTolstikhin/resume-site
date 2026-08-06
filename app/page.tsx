import Image from "next/image";

const profile = {
  name: "Alex Tolstikhin",
  title: "Software Engineer",
  location: "Bay Area, CA",
  phone: "510.697.56.69",
  email: "alexeytolstikhin@gmail.com",
  linkedin: "https://linkedin.com/in/alexeytolstikhin",
  // Lorem ipsum placeholder — swap for a real one-liner if you want a punchier hook.
  tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  bio: "I'm a software engineer based in the Bay Area with 13+ years building web products end to end — from QA and test automation to leading frontend architecture. Over the last several years I've focused on React, Next.js, and TypeScript, shipping features across insurance and fintech products at SoFi, with an emphasis on performance, testing, and reliability.",
};

const heroSkills = ["React", "Next.js", "TypeScript", "GraphQL"];

const stats = [
  { value: "13+", label: "Years of Experience" },
  { value: "4", label: "Companies" },
  { value: "80%", label: "Fewer Errors Shipped" },
  { value: "1s", label: "Faster Page Loads" },
];

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
    dates: "September 2022 - PRESENT",
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
    dates: "September 2021 - August 2022",
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
    dates: "December 2016 - August 2021",
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
    dates: "November 2015 - November 2016",
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
    dates: "February 2015 - November 2015",
    location: "Sunnyvale, CA",
    bullets: [
      "Specialized in ensuring the reliability and quality of the MDM tool by designing and executing test plans, conducting regression testing, and documenting software defects.",
      "Managed MDM enrolling, testing, debugging, and verification procedures, leveraging tools such as Android Debug Bridge for Android devices, Apple Configurator for iOS devices, and other relevant testing frameworks.",
    ],
  },
  {
    company: "ISD",
    role: "Junior Software QA Engineer",
    dates: "January 2013 - December 2014",
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

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
];

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-950 text-zinc-100 selection:bg-violet-500/30">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-tight text-white">
          Alex Tolstikhin
        </a>
        <nav className="hidden gap-8 text-sm text-zinc-400 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(124,58,237,0.25),rgba(9,9,11,0)_70%)]"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="text-lg text-zinc-300">
            👋 Hi, I&apos;m{" "}
            <span className="font-semibold text-white">{profile.name}</span>
          </p>
          <h1 className="mt-2 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            {profile.title}
          </h1>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-400">
            {profile.tagline}
          </p>

          <dl className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400">
            <div className="flex items-center gap-1.5">
              <dt className="sr-only">Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="flex items-center gap-1.5">
              <dt className="sr-only">Phone</dt>
              <dd>{profile.phone}</dd>
            </div>
            <div className="flex items-center gap-1.5">
              <dt className="sr-only">Email</dt>
              <dd>
                <a
                  href={`mailto:${profile.email}`}
                  className="underline decoration-zinc-600 underline-offset-4 hover:text-white"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-transform hover:scale-105"
            >
              Email Me
            </a>
            <a
              href="#experience"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              View Experience
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center rounded-full border border-white/15 p-3 text-white transition-colors hover:bg-white/5"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden
            className="absolute inset-6 -z-10 rounded-full bg-gradient-to-br from-indigo-500/40 to-violet-500/30 blur-2xl"
          />
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900 shadow-2xl">
            <Image
              src="/headshot.png"
              alt="Portrait of Alex Tolstikhin"
              fill
              priority
              sizes="(min-width: 1024px) 384px, 80vw"
              className="object-cover"
            />
          </div>

          {heroSkills.map((skill, i) => (
            <span
              key={skill}
              className={[
                "absolute rounded-xl border border-white/10 bg-zinc-900/90 px-3 py-1.5 text-xs font-medium text-zinc-200 shadow-lg backdrop-blur",
                heroChipPosition[i],
              ].join(" ")}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const heroChipPosition = [
  "-top-2 -left-4 -rotate-6",
  "top-10 -right-6 rotate-3",
  "bottom-16 -left-8 rotate-3",
  "-bottom-3 -right-2 -rotate-3",
];

function About() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="About Me" />
        <div className="mt-10 grid gap-12 lg:grid-cols-5">
          <p className="text-base leading-relaxed text-zinc-400 lg:col-span-3">
            {profile.bio}
          </p>
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5"
              >
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Skills" title="What I Work With" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6"
            >
              <h3 className="text-sm font-semibold text-white">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-white/5 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experience" title="Where I've Worked" />
        <div className="mt-10 space-y-10 border-l border-white/10 pl-8">
          {experience.map((job, i) => (
            <div key={`${job.company}-${job.role}-${i}`} className="relative">
              <span className="absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full bg-violet-400 ring-4 ring-zinc-950" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-semibold text-white">
                  {job.company}{" "}
                  <span className="font-normal text-zinc-400">
                    / {job.role}
                  </span>
                </h3>
                <span className="text-xs text-zinc-500">{job.dates}</span>
              </div>
              <p className="text-xs text-zinc-500">{job.location}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400">
                {job.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-t border-white/5 px-6 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Education" title="Academic Background" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-sm font-semibold text-white">
                  {edu.school}
                </h3>
                <span className="text-xs text-zinc-500">{edu.dates}</span>
              </div>
              <p className="mt-1 text-sm text-zinc-400">{edu.credential}</p>
              <p className="mt-1 text-xs text-zinc-500">{edu.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t border-white/5 px-6 py-20 text-center"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-white">Let&apos;s work together</h2>
        <p className="mt-3 text-zinc-400">
          {profile.location} &middot; {profile.phone}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-block rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition-transform hover:scale-105"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center rounded-full border border-white/15 p-3 text-white transition-colors hover:bg-white/5"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-12 text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400" />
    </div>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z" />
    </svg>
  );
}
