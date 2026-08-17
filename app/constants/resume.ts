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
  bio: "Senior Software Engineer in the Bay Area, building lending and insurance products at SoFi across React, Next.js, TypeScript, and Kotlin services. Nine years as an engineer, preceded by four in QA and test automation — which is why I tend to own the SLOs, event instrumentation, compliance reviews, and end-to-end release gates around what I ship, not just the features.",
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
      "StyleX",
      "Design Systems",
      "Accessibility",
      "Performance Optimization",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Kotlin",
      "Groovy",
      "PHP",
      "REST APIs",
      "SQL & DB Migrations",
      "Kafka",
    ],
  },
  {
    category: "Fintech & Domain",
    items: [
      "Lending Originations",
      "Plaid",
      "DocuSign",
      "Consent & Compliance Flows",
      "PII Masking",
      "CVE Remediation",
    ],
  },
  {
    category: "Build & Tooling",
    items: [
      "Webpack",
      "Bootstrap",
      "MUI (Material-UI)",
      "Contentful",
      "Istio / Service Mesh",
    ],
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
    items: [
      "Optimizely",
      "Amplitude",
      "DataDog (RUM & Monitors)",
      "Segment / CDP",
      "Kibana",
      "Rollbar",
    ],
  },
];

export const experience: Job[] = [
  {
    company: "SoFi",
    role: "Senior Software Engineer",
    dates: "September 2022 — Present",
    location: "San Francisco, CA",
    bullets: [
      "Tech lead and reviewer for a headless CMS integration into the SMB lending funnel, owning access provisioning and the security review of token handling.",
      "Built the SMB lending funnel across React and Kotlin services — business-classification search, a standardized error-message utility that removed per-step boilerplate, attribution tracking from application start, and create-application API changes.",
      "Owned the Plaid asset-report failure recovery path end to end, pairing frontend routing to manual document upload with a backend SMS re-engagement trigger, turning a dead-end verification failure into a recoverable flow.",
      "Instrumented the lending funnel end to end — application start, offer received, offer selected, and loan funded — across backend event schemas and the customer data platform, then catalogued every event name as the team's source of truth for analytics.",
      "Challenged a mobile-web design direction that duplicated native app patterns and proposed a responsive approach instead; UX adopted it, removing a parallel implementation for the web team. Drove a shared component out of three engineers' near-duplicate pages, cutting maintenance overhead.",
      "Drove the compliance review process for a consumer acceptance program, remediated dependency CVEs across three repositories, and added PII masking to session replay.",
      "Mentor engineers across web and mobile — onboarded a new hire to CI/CD and on-call tooling on day one, review merge requests for the frontend team, and pair on server-side rendering and environment debugging. Conduct frontend technical interviews and author structured hiring recommendations.",
      "Led frontend delivery for the Auto and Life insurance funnels in React/TypeScript, integrating entry points across React, Next.js, Kotlin, Groovy, and Flutter codebases to grow insurance leads.",
      "Initiated and spearheaded the migration of the app to server-side API fetching, resulting in significant performance enhancements throughout the platform, with up to 1-second improvements in loading times on pages with heavy API usage.",
      "Built and owned the Cypress end-to-end suite gating frontend releases, catching breaking changes that originated in other teams' external repositories before they reached production.",
      "Owned production reliability for the insurance funnels: instituted weekly Rollbar triage reviews that reduced errors by 80%, and led DataDog SLO adoption that moved key feature SLOs from 99.5% to 99.9%, representing SLO reporting in weekly cross-team reviews.",
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
