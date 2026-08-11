// All resume content lives here so the page components stay presentational.
// Design tokens live in app/globals.css as Tailwind theme colors.
// Split this into separate files if it grows.

import type {
  Job,
  NavLink,
  Profile,
  School,
  SkillGroup,
} from "@/app/types";

export const profile: Profile = {
  first: "Alex",
  last: "Tolstikhin",
  title: "Senior Software Engineer",
  location: "San Francisco Bay Area, CA",
  phone: "510.697.5669",
  phoneHref: "tel:+15106975669",
  email: "alexeytolstikhin@gmail.com",
  linkedin: "https://linkedin.com/in/alexeytolstikhin",
  linkedinLabel: "linkedin.com/in/alexeytolstikhin",
  github: "https://github.com/AlexTolstikhin",
  githubLabel: "github.com/AlexTolstikhin",
  bio: "Senior Software Engineer in the Bay Area, building insurance and fintech products at SoFi with React, Next.js, and TypeScript. Nine years as an engineer, preceded by four in QA and test automation — which is why I tend to own the SLOs, error monitoring, and end-to-end release gates around what I ship, not just the features.",
};

export const skills: SkillGroup[] = [
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
    ],
  },
  {
    category: "Backend Development",
    items: ["Kotlin", "Groovy", "PHP"],
  },
  {
    category: "Build & Tooling",
    items: ["Webpack", "Bootstrap", "MUI (Material-UI)"],
  },
  {
    category: "Testing & Quality",
    items: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Playwright",
      "JMeter",
      "SLOs & Error Budgets",
    ],
  },
  {
    category: "Version Control & CI/CD",
    items: ["Git", "GitHub", "GitLab", "Bitbucket", "Jenkins", "GitHub Actions"],
  },
  {
    category: "Analytics & Monitoring",
    items: ["Optimizely", "Amplitude", "DataDog", "Kibana", "Rollbar"],
  },
];

export const experience: Job[] = [
  {
    company: "SoFi",
    role: "Senior Software Engineer",
    dates: "September 2022 — Present",
    location: "San Francisco, CA",
    bullets: [
      "Led engineering efforts on multiple projects within the Auto and Life insurance domains, utilizing React/TypeScript, and focusing on seamless integration of new features and enhancements, resulting in increased user engagement and acquisition within respective funnels.",
      "Initiated and spearheaded the migration of the app to server-side API fetching, resulting in significant performance enhancements throughout the platform, with up to 1-second improvements in loading times on pages with heavy API usage.",
      "Built and owned the Cypress end-to-end suite gating frontend releases, catching breaking changes that originated in other teams' external repositories before they reached production.",
      "Collaborated on multiple cross-functional projects by integrating entry points in React, Next.js, Kotlin, Groovy, and Flutter repositories, contributing to an increase in leads for the insurance product.",
      "Implemented weekly Rollbar issue reviews, reducing errors by 80% through prioritized resolution during on-call weeks and efficient handling of high-priority issues.",
      "Led team effort to implement DataDog SLOs, resulting in an improvement of key feature SLOs from 99.5% to 99.9%, ensuring consistent product quality. Also served as the representative for SLO reporting and weekly updates in cross-team meetings.",
    ],
  },
  {
    company: "SoFi",
    role: "Software Engineer",
    dates: "September 2021 — August 2022",
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
    role: "Software Engineer (promoted from Senior QA Engineer)",
    dates: "December 2016 — August 2021",
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
    dates: "November 2015 — November 2016",
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
    dates: "February 2015 — November 2015",
    location: "Sunnyvale, CA",
    bullets: [
      "Specialized in ensuring the reliability and quality of the MDM tool by designing and executing test plans, conducting regression testing, and documenting software defects.",
      "Managed MDM enrolling, testing, debugging, and verification procedures, leveraging tools such as Android Debug Bridge for Android devices, Apple Configurator for iOS devices, and other relevant testing frameworks.",
    ],
  },
  {
    company: "ISD",
    role: "Junior Software QA Engineer",
    dates: "January 2013 — December 2014",
    location: "Dnipro, Ukraine",
    bullets: [
      "Tested a hospital reporting application in a regulated healthcare environment, owning test cases and defect documentation.",
    ],
  },
];

export const education: School[] = [
  {
    school: "UC Berkeley Extension Coding Bootcamp",
    credential: "Certificate",
    dates: "2016 — 2017",
    location: "San Francisco, CA",
  },
  {
    school: "Kyiv National University of Trade and Economics",
    credential: "Bachelor's in Management",
    dates: "2006 — 2011",
    location: "Kyiv, Ukraine",
  },
];

export const navLinks: NavLink[] = [
  { href: "#experience", label: "Experience" },
];
