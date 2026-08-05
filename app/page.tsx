const contact = {
  name: "Alex Tolstikhin",
  title: "Software Engineer",
  location: "Bay Area, CA",
  phone: "510.697.56.69",
  email: "alexeytolstikhin@gmail.com",
};

const skills = [
  {
    category: "Frontend Development",
    items:
      "HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, TypeScript, GraphQL, Redux, React Query, Flutter, Sass, Less, Styled Components, Performance Optimization, Jest, React Testing Library, Cypress, Playwright",
  },
  {
    category: "Backend Development",
    items: "Kotlin, Scala, PHP",
  },
  {
    category: "Version Control and Collaboration",
    items: "Git, GitHub, GitLab, Bitbucket, CI/CD (Jenkins, GitHub Actions)",
  },
  {
    category: "Design and Frameworks",
    items: "Webpack, Bootstrap, MUI (Material-UI)",
  },
  {
    category: "Analytics and Monitoring",
    items: "Optimizely, Amplitude, DataDog, Kibana, Rollbar",
  },
  {
    category: "Soft Skills",
    items: "Communication, Collaboration, UI/UX Design Principles",
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

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-50 py-10 px-4 dark:bg-black sm:py-16">
      <main className="mx-auto max-w-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800 sm:p-12 print:p-0 print:shadow-none print:ring-0">
        <header className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {contact.name}
          </h1>
          <p className="mt-1 text-lg text-zinc-600 dark:text-zinc-400">
            {contact.title}
          </p>
          <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
            <span>{contact.location}</span>
            <span aria-hidden>&middot;</span>
            <span>{contact.phone}</span>
            <span aria-hidden>&middot;</span>
            <a
              href={`mailto:${contact.email}`}
              className="text-zinc-700 underline decoration-zinc-300 underline-offset-2 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
            >
              {contact.email}
            </a>
          </p>
        </header>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Skills
          </h2>
          <dl className="mt-3 space-y-2">
            {skills.map((group) => (
              <div key={group.category} className="text-sm leading-relaxed">
                <dt className="inline font-semibold text-zinc-800 dark:text-zinc-200">
                  {group.category}:{" "}
                </dt>
                <dd className="inline text-zinc-600 dark:text-zinc-400">
                  {group.items}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Experience
          </h2>
          <div className="mt-3 space-y-6">
            {experience.map((job, i) => (
              <div key={`${job.company}-${job.role}-${i}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {job.company}{" "}
                    <span className="font-normal text-zinc-600 dark:text-zinc-400">
                      / {job.role}
                    </span>
                  </h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {job.dates}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {job.location}
                </p>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {job.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Education
          </h2>
          <div className="mt-3 space-y-3">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5"
              >
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  {edu.school}{" "}
                  <span className="font-normal text-zinc-600 dark:text-zinc-400">
                    / {edu.credential}
                  </span>
                  <span className="block text-xs font-normal text-zinc-500 dark:text-zinc-400 sm:hidden">
                    {edu.location}
                  </span>
                </h3>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {edu.dates}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
