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
  title: "Software Engineer",
  location: "Bay Area, CA",
  phone: "510.697.56.69",
  email: "alexeytolstikhin@gmail.com",
  linkedin: "https://linkedin.com/in/alexeytolstikhin",
  linkedinLabel: "linkedin.com/in/alexeytolstikhin",
  bio: "I'm a software engineer based in the Bay Area with 13+ years building web products end to end — from QA and test automation to leading frontend architecture. Over the last several years I've focused on React, Next.js, and TypeScript, shipping features across insurance and fintech products at SoFi, with an emphasis on performance, testing, and reliability.",
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

export const experience: Job[] = [
  {
    company: "SoFi",
    role: "Senior Software Engineer",
    dates: "September 2022 — Present",
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
    role: "Software Engineer (Level 1)",
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
      "Contributed to developing a hospital-focused application for generating accurate medical reports, conducting meticulous testing and documentation to ensure system reliability. Collaboratively, we enhanced the application's quality and performance, meeting critical healthcare needs.",
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

export const navLinks: NavLink[] = [{ href: "#top", label: "Experience" }];
