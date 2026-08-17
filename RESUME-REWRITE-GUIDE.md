# Resume Rewrite Guide

Output of a four-agent review: a recruiter, an engineering hiring manager, an
ATS/AI-searchability audit, and a validator that fact-checked the first two
against `app/constants/resume.ts`.

**Ground rule: nothing in this file invents a number.** Every metric is either
already on your resume or a `[PLACEHOLDER]` you fill in. **Do not ship a bullet
containing brackets.** Fabricated metrics are career-damaging — if you can't
reconstruct a number, drop it and describe the work instead.

---

## Already applied

These needed no facts you hadn't already given, and are live in the repo:

- `profile.title` → **Senior Software Engineer** (was "Software Engineer" — the
  only role descriptor above the fold, and it undersold you)
- Bio rewritten — no longer opens on QA; states nine years engineering
- `(Level 1)` / `(Level 2)` dropped; Ascendify now reads
  *"Software Engineer (promoted from Senior QA Engineer)"*
- Phone `510.697.56.69` → `510.697.5669` (was grouped 3-3-2-2, which fails the
  standard US phone regex) + `tel:` link
- GitHub link added; `rel="me"` on profile links
- `Scala` removed (appeared nowhere in any bullet); "Soft Skills" group removed
- `Groovy` + `JMeter` added — both already appear in your bullets
- Testing tools consolidated into a "Testing & Quality" group
- Job title is now the `<h3>`, not the company name
- JSON-LD `ProfilePage`/`Person`, OG/Twitter/canonical meta, robots.txt, sitemap.xml
- Nav anchor bug fixed (`#top` → `#experience`)
- "preventing **all occurrences**" absolute removed
- ISD bullet: `"Collaboratively, we enhanced"` → first person singular

---

## Blocking questions — answer these first

1. **The SLO bullet.** Did the *target* move 99.5% → 99.9%, or did *attainment*?
   These are opposite accomplishments and the current wording can't be parsed.
   If attainment moved, that's a **5× error-budget reduction** and you're badly
   underselling it. Check DataDog SLO config history.
2. **The 80%.** 80% of *what* — total error events, distinct Rollbar issues, or
   errors per session? Over what window? From what absolute baseline?
3. **Redux → hooks.** Did you *remove* Redux, or migrate `connect()` HOCs to
   `useSelector`/`useDispatch` and keep it? The validator thinks the latter is
   likelier for 2016–2021 — which would make the current wording misleading.
   Check the old repo's `package.json` for `react-redux`.
4. **"Up to 1 second."** Which metric (LCP, TTFB, FCP)? What percentile? How
   many routes? "Up to" reads as a best-case cherry-pick.
5. **Team sizes.** You use six leadership verbs and zero headcounts. Even
   "3 engineers" beats a bare "Led."
6. **Mentorship.** Anyone you onboarded, mentored, or supported through promo?
   The word appears nowhere — it's the most conspicuous omission for a senior role.

---

## Rewrites

### SoFi — Senior Software Engineer

**Bullet 1**
> **Before:** "Led engineering efforts on multiple projects within the Auto and Life insurance domains, utilizing React/TypeScript, and focusing on seamless integration of new features and enhancements, resulting in increased user engagement and acquisition within respective funnels."
>
> **After:** "Led frontend delivery for SoFi's Auto and Life insurance products in React/TypeScript, directing `[TEAM SIZE]` engineers across `[N]` launches; `[NAMED FUNNEL METRIC]` moved from `[BASELINE]` to `[RESULT]` over `[TIMEFRAME]`."
>
> **Why:** This is the most-read line on your resume and currently says almost
> nothing. "Utilizing" and "focusing on seamless integration" are filler.

**Bullet 2 — your flagship; let it run two lines**
> **Before:** "Initiated and spearheaded the migration of the app to server-side API fetching, resulting in significant performance enhancements throughout the platform, with up to 1-second improvements in loading times on pages with heavy API usage."
>
> **After:** "Proposed and led the migration from client-side to server-side API fetching, moving `[N]` data-heavy routes off the client request waterfall; `[LCP or TTFB]` improved from `[BASELINE]` to `[RESULT]` at p75. Chose server-side fetching over client-side caching because `[REASON]`, accepting `[TRADEOFF]`."
>
> **Why:** Adds the **first explicit engineering tradeoff on your entire resume**.
> Zero of 19 bullets currently contain a decision — the single biggest gap.

**Bullet 4**
> **Before:** "Collaborated on multiple cross-functional projects by integrating entry points in React, Next.js, Kotlin, Groovy, and Flutter repositories, contributing to an increase in leads for the insurance product."
>
> **After:** "Shipped insurance entry points across `[N]` product surfaces and 5 codebases — React, Next.js, Kotlin, Groovy, and Flutter — coordinating with `[N]` partner teams to keep eligibility and tracking logic consistent across stacks. Insurance `[LEAD METRIC]` increased from `[BASELINE]` to `[RESULT]`."
>
> **Why:** "Collaborated on / contributing to" disclaims ownership twice in one
> sentence. Shipping in five languages is your most undersold fact.

**Bullet 5**
> **Before:** "Implemented weekly Rollbar issue reviews, reducing errors by 80% through prioritized resolution during on-call weeks and efficient handling of high-priority issues."
>
> **After:** "Instituted a weekly Rollbar triage review and drove it through on-call rotations, cutting production `[error events / distinct issues / errors per 1k sessions]` from `[BASELINE]` to `[RESULT]` over `[TIMEFRAME]`."

**Bullet 6 — pick ONE**
> **Before:** "Led team effort to implement DataDog SLOs, resulting in an improvement of key feature SLOs from 99.5% to 99.9%, ensuring consistent product quality. Also served as the representative for SLO reporting and weekly updates in cross-team meetings."
>
> **If attainment improved:** "Led adoption of DataDog SLOs across `[N]` critical insurance flows, then drove the reliability work the error budget exposed — attained availability went from 99.5% to 99.9%, a 5× reduction in error-budget burn. Owned SLO reporting to `[AUDIENCE]` in weekly cross-team reviews."
>
> **If the target was raised:** "Defined and shipped DataDog SLOs for `[N]` critical insurance flows, raising the availability target from 99.5% to 99.9% and holding `[ATTAINMENT]%` against it. Owned weekly SLO reporting to `[AUDIENCE]`."
>
> **Only use the 5× framing if attainment actually moved.**

**New bullet — mentorship (only if true)**
> "Mentored `[N]` engineers (`[LEVELS]`) — `[onboarding / code-review ownership / design-doc feedback / promo support]`; `[OUTCOME]`."

**New bullet — compliance (only if you personally owned it)**
> "Built insurance funnels against state-by-state eligibility rules and required disclosures, `[WHAT YOU OWNED]`."

---

### SoFi — Software Engineer · shrink 4 bullets → 3

**Bullet 1**
> **Before:** "Engaged in various projects within the Lantern by SoFi team, a financial marketplace and product comparison platform owned by SoFi. Leveraged Next.js for development, contributing to multiple initiatives aimed at enhancing user experience and product functionality."
>
> **After:** "Built and shipped `[N]` features on Lantern by SoFi, a Next.js marketplace comparing `[PRODUCT CATEGORIES]` across `[N]` lending partners."
>
> **Why:** 36 words that say "I was there." Half of it describes your employer.
> Naming what Lantern compares also adds the fintech keywords you're missing.

**Bullets 2 + 3 → merge into one**
> **Before:** "Utilized Optimizely for A/B testing…" / "Leveraged Amplitude for in-depth analysis…"
>
> **After:** "Ran the experimentation loop end to end — designed and shipped `[N]` Optimizely A/B tests behind feature flags, read results in Amplitude, and killed or scaled based on the data. `[ONE CONCRETE WIN: which test, what moved, BASELINE → RESULT]`."
>
> **Why:** Two consecutive "Utilized/Leveraged [tool]" lines are tool inventory,
> not accomplishments.

**Bullet 4**
> **Before:** "Developed during code freeze period and introduced to the team an internal tool…"
>
> **After:** "Built an internal tool for overriding client-side experiments and feature flags locally, cutting experiment-testing setup from `[BASELINE]` to `[RESULT]`; adopted by `[N]` engineers and QA."
>
> **Why:** Opening on "during code freeze period" frames real initiative as
> downtime work.

---

### Ascendify — Software Engineer · **grow 3 → 5 · highest priority**

This is a **57-month** tenure holding **64 words** — while your 12-month SoFi
stint holds 95. That imbalance argues against you more than any single bullet.

**Bullet 1**
> **Before:** "Played an active role in multiple React-based initiatives within a startup environment, contributing to the development of a recruiting platform aimed at serving enterprise-level clients."
>
> **After:** "Built React features for an enterprise recruiting platform serving `[N]` enterprise customers / `[N]` end users, at a `[COMPANY SIZE]`-person startup where I owned `[SCOPE]` end to end."

**Bullet 2**
> **Before:** "Directed the migration of multiple legacy components from Backbone and jQuery/PHP to React SPAs, resulting in approximately 50% of the application being successfully migrated."
>
> **After:** "Led the incremental migration of a Backbone/jQuery/PHP monolith to React SPAs — `[N]` modules converted over `[TIMEFRAME]` while the product shipped continuously. Sequenced `[WHICH MODULES FIRST]` first so the remaining legacy was the least-touched part of the codebase."
>
> **Why:** "~50% migrated" invites "so half is still broken?" Naming the
> sequencing turns a partial number into deliberate judgment.

**Bullet 3 — disambiguate first**
> **If Redux was removed:** "Replaced Redux with React Context and useReducer for `[SCOPE]`, eliminating `[N]` action-creator/reducer files; kept a global store only where `[WHAT]` required it."
>
> **If Redux stayed:** "Migrated `[N]` connected components from react-redux `connect()` HOCs to the `useSelector`/`useDispatch` hooks API, removing the wrapper-component layer and `[SPECIFIC BENEFIT]`."
>
> **Why:** "From Redux state management to React hooks" is technically
> incoherent — hooks aren't a state-management library, and react-redux has been
> hooks-based since v7.1. As written it reads as vocabulary pattern-matching.

**New bullet 4 — frontend infrastructure (only if true)**
> "Owned the frontend build and release path — `[WEBPACK/CI SPECIFICS]` — cutting `[BUILD TIME or BUNDLE SIZE]` from `[BASELINE]` to `[RESULT]`."

**New bullet 5 — the QA→SWE hinge (only if true)**
> "Converted from QA lead into engineering while continuing to own the platform's test infrastructure — `[WHAT]` — and completed a UC Berkeley Extension coding bootcamp concurrently."
>
> **Why:** This is the hinge of your entire career narrative and it's currently
> invisible. It also turns two inert education dates into evidence of self-direction.

---

### Ascendify — Senior Software QA Engineer · shrink 3 → 2

**Bullet 1**
> **After:** "Led QA for the platform (`[TEAM SIZE]` engineers), rebuilding the release process around `[ONE CONCRETE CHANGE]` and reducing `[ESCAPED DEFECTS or CYCLE TIME]` from `[BASELINE]` to `[RESULT]`."

**Bullet 2**
> **After:** "Stood up the platform's first load-testing practice in JMeter, going from no performance coverage to `[N]` of `[N]` production API endpoints under automated load tests; surfaced `[WHAT WAS FOUND]`."
>
> **Why:** "0% to 100%" reads as rounded up. "`[N]` of `[N]` endpoints" is the
> same achievement in a form that survives a follow-up question.

**Bullet 3 — cut**
> "Implemented structured QA documentation including Test Plans, Test Cases, and
> coverage matrix…" — lowest-value bullet on the resume. Delete, or fold "Test
> Plans and a coverage matrix" into Bullet 1 as a four-word clause.

---

### Good Technology by BlackBerry · shrink 2 → 1

> **After:** "Tested Good Technology's enterprise MDM product across iOS and Android device fleets (ADB, Apple Configurator), owning enrollment and regression coverage for `[N]` device/OS combinations."
>
> **Why:** 52 words of generic QA verbs for a 10-month role from 2015. Keeps the
> recognizable brand, drops the rest.

---

## Target allocation

| Role | Tenure | Now | Target | Words now → target |
|---|---|---|---|---|
| SoFi Senior SWE | 47 mo | 6 | 6–7 | 176 → ~200 |
| SoFi SWE | 12 mo | 3 | 3 | 95 → ~75 |
| **Ascendify SWE** | **57 mo** | **3** | **5** | **64 → ~130** |
| Ascendify Sr QA | 13 mo | 3 | 2 | 61 → ~50 |
| Good Technology | 10 mo | 2 | 1 | 52 → ~30 |
| ISD | 24 mo | 1 | 1 | ~22 |

QA drops from 32% of bullets to ~22%; recent engineering rises from 53% to ~78%.

**Do not delete the QA roles.** It would open a ~4-year employment gap, falsify
your years-of-experience claim, and destroy the reliability thesis below.
Compress, never delete.

---

## Positioning

Your differentiator, consistent across every employer: **a frontend engineer who
owns reliability, observability, and release safety.** Cypress release gating,
Rollbar triage, DataDog SLOs, JMeter load testing. Most senior frontend
candidates cannot define an SLO; you've run them and reported them cross-team.

No line on your resume names this. The QA history is currently presented as
*biography* — where you came from — when it should read as *thesis*: why the
frontend work you ship doesn't break. Same facts, opposite outcome.

---

# Addendum — material from the Q3/2026 hype doc

Source: internal quarterly self-review covering **Apr 2025 – Aug 2026**, team
**Lantern × SMB**, level **Senior**.

**This closes almost every gap the review identified.** It also shows the resume
is describing the wrong job: the page says Auto/Life insurance, while the last
~18 months have been Lantern marketplace and SMB lending — broader, more
full-stack, and more senior than anything currently written down.

### Sanitize before using any of this

- **Strip all ticket IDs** — `LTN-####`, `SMB-####`, `CC-#####`, `TGSD-#####`.
  Meaningless externally; leaks internal tracker structure.
- **Strip internal repo/service names** — `lantern-consumer-db`, `smb-ui`,
  `smb-platform`, `una-web-components`, `banking-accounts-ui`, `money-ui`,
  `lending-portal`. Describe the system instead.
- **Never include colleague names.** Five engineers appear by name in the doc
  (one with a surname). Write "a new hire", "three engineers", "teammates".
- The interview-assessment screenshot contains a **named candidate and a
  do-not-hire recommendation**. Use only the fact that you interview.

### Gaps now closable

| Gap | Evidence |
|---|---|
| Mentorship (absent) | 10+ instances: onboarding a new hire to CI/CD + on-call tooling, MR reviews, unblocking engineers across mobile/web, pairing on SSR debugging |
| Tradeoffs (0 of 19 bullets) | Figma challenge → responsive over native-mimicking; expand/contract MR split for safe rollback |
| Tech lead | "Acted as tech lead and reviewer for the Contentful CMS integration" |
| Backend / full-stack | DB migrations, BE event schemas, create-application API, payment-capability extension, Istio sidecar egress |
| Compliance / domain | Consumer Acceptance Program review process, consent versioning, PII masking, CMS token-handling security review |
| Security | Lodash CVE across three repos; dnsjava CVE |
| GraphQL (claimed, unevidenced) | GraphQL operationName forwarding for API observability |
| Interviewing | Authors structured frontend interview assessments and hire recommendations |
| Fintech keywords | lending, originations, repayment cadence, Plaid, DocuSign, offers, funnel |

### Draft bullets — SoFi, Senior Software Engineer

Sanitized, no invented numbers. Pick 6–8; don't ship all of them.

1. "Acted as tech lead and reviewer for a headless CMS integration into the SMB
   lending funnel, owning access provisioning and the security review of token
   handling."
2. "Built the SMB lending funnel across frontend and backend — business
   classification search, a standardized error-message utility that removed
   per-step boilerplate, attribution tracking from application start, and
   create-application API changes."
3. "Owned the Plaid asset-report failure recovery path end to end — frontend
   routing to manual document upload plus a backend SMS re-engagement trigger —
   turning a dead-end verification failure into a recoverable flow."
4. "Instrumented the lending funnel end to end (application start, offer
   received, offer selected, loan funded) across backend event schemas and the
   customer data platform, and catalogued every event name into the team's
   source of truth for analytics."
5. "Challenged a mobile-web design direction that duplicated native app patterns;
   proposed a responsive approach instead, which the UX team adopted — removing
   a parallel implementation for the web team." ← *your tradeoff bullet*
6. "Spotted duplicated implementations across three engineers' pages and drove
   creation of a shared reusable component that all three adopted, cutting
   duplicate code and maintenance overhead."
7. "Drove the compliance review process for a consumer acceptance program,
   remediated CVEs across three repositories, and added PII masking to session
   replay."
8. "Mentored engineers across web and mobile — onboarded a new hire to CI/CD and
   on-call tooling on day one, reviewed merge requests for the frontend team,
   and paired on server-side rendering and environment debugging."
9. "Extended backend payment capability to support a new repayment cadence in
   loan originations, and gated new payment features for legacy mobile clients
   below a minimum version to prevent crashes on older builds."
10. "Configured service-mesh egress for cross-service communication in the
    lending portal — infrastructure ownership beyond typical frontend scope."
11. "Added proactive Datadog monitoring for a critical unmonitored endpoint and
    GraphQL operation-name forwarding for precise real-user monitoring."
12. "Conduct frontend technical interviews and author structured hiring
    recommendations."

### Skills to add (now evidenced)

`GraphQL` (move out of unevidenced), `Plaid`, `Contentful`, `StyleX`,
`Istio / service mesh`, `Kafka`, `Datadog RUM`, `CDP / Segment`,
`Design systems`, `CI/CD`, `Web security (CVE remediation, PII masking)`,
`SQL / DB migrations`.

### Still open

- Which **backend language** is the SMB/Lantern BE work in? That determines
  whether `Kotlin` stays and whether you can claim full-stack outright.
- The insurance work (2022–2024) and Lantern/SMB (2025–present) are different
  domains inside one title. Decide whether to split the SoFi Senior entry into
  two dated blocks or group bullets by domain.

## Still worth doing

- **Ship a downloadable PDF.** `/resume.pdf` currently 404s, and most ATS flows
  require a file upload.
- **Audit remaining skills.** These appear nowhere in any bullet: GraphQL, React
  Query, Sass, Less, Styled Components, Jest, RTL, Playwright, Webpack, Bootstrap,
  MUI, Kibana. Keep only what you'd survive a ten-minute conversation on.
- **PHP** is currently your only backend evidence — and it's evidence of
  migrating *away* from it.
- **Add fintech vocabulary to bullets**, not just the bio: `lending`, `loan`,
  `credit`. Lantern is a lending marketplace; the words are accurate and free.
