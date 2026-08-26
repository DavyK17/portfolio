# Davy Sheja Kamanzi

**FULL-STACK SOFTWARE ENGINEER | PRODUCT ENGINEER**

Nairobi, Kenya · Open to remote international opportunities  
+254 799 933 229 · davykamanzi@live.com  
GitHub: [github.com/DavyK17](https://github.com/DavyK17) · Portfolio: [davyk17.pages.dev](https://davyk17.pages.dev) · LinkedIn: [linkedin.com/in/davykamanzi](https://www.linkedin.com/in/davykamanzi)  
Engineering showcase: [github.com/koloseum-technologies/engineering-showcase](https://github.com/koloseum-technologies/engineering-showcase) · npm: [npmjs.com/org/koloseum](https://www.npmjs.com/org/koloseum) · CV (PDF): [davyk17.pages.dev/Davy-Kamanzi-CV.pdf](https://davyk17.pages.dev/Davy-Kamanzi-CV.pdf)

---

## PROFESSIONAL SUMMARY

Full-stack software engineer with professional web-development experience since 2021 and hands-on ownership of complex product development. Currently leading engineering for **Koloseum**, a multi-service esports platform built with TypeScript, SvelteKit, PostgreSQL and Supabase.

Experienced across system architecture, domain and database modelling, authentication and authorisation, security, financial workflows, caching, automated testing, shared libraries and containerised deployment. Particularly effective at translating operational requirements into maintainable systems and taking products from specification through implementation, testing, release and iterative maintenance.

---

## TECHNICAL SKILLS

**Languages:** TypeScript, JavaScript (ES6+), SQL, PL/pgSQL, HTML5, CSS3

**Frontend:** Svelte, SvelteKit, Tailwind CSS, DaisyUI

**Backend & APIs:** Supabase, PostgreSQL, REST APIs, Supabase Edge Functions, Cloudflare Workers, Deno

**Architecture & Engineering:** Full-stack development, microservice architecture, system design, database design, domain modelling, service boundaries, API contracts, reusable packages, component architecture, technical specification

**Security & Access Control:** Authentication, authorisation, role-based access control, PostgreSQL Row-Level Security (RLS), input validation, input sanitisation, sensitive-data workflows

**Testing & Quality:** Vitest, Playwright, MSW, Supawright, unit testing, end-to-end testing, test fixtures/seeding, error handling, Sentry

**Infrastructure:** Docker, Kubernetes, DigitalOcean, Cloudflare Pages (git-based continuous deployment), Valkey/Redis-compatible caching, containerised deployment

**Engineering Practices:** Requirements analysis, technical documentation, architecture decisions, documented pull-request workflow with automated deploy checks, release/patch management, stakeholder communication, product development

---

## PROFESSIONAL EXPERIENCE

### ACE PRO SPORTS TECHNOLOGIES
**Head of Technology & Community Relations | Director-Shareholder**  
October 2021 – Present · Nairobi, Kenya

Sports and esports technology organisation focused on digital transformation, athlete/player authentication and verification, sports data and analytics, digital ticketing, league and event management, and related technology services.

- Lead technology development and product engineering, translating operational and business requirements into software systems and technical specifications.
- Own engineering direction for **Koloseum**, the company's competition platform for esports, including architecture, product specification, implementation and iterative release.
- Design application architecture, service boundaries, data models, authentication flows, access-control rules and technical requirements for new platform functionality.
- Work directly with business, competition and community stakeholders to turn real operational requirements into implementable software.
- Combine software engineering with domain expertise from esports competition operations, community management and live-event technology.

### KOLOSEUM
**Lead Full-Stack Engineer / Product Engineer**  
2024 – Present

Multi-service esports competition platform developed for Ace Pro Sports Technologies. The MVP is centred on **Competitions**, supported by Player, authentication and gaming-lounge infrastructure.

- Architected and developed a **multi-service web platform** spanning Public, Player, Lounge and Backroom domains using TypeScript, SvelteKit, PostgreSQL and Supabase.
- Designed and implemented substantial MVP services including **Public Authentication, Players Sessions, Lounges Account, Lounges Operations and Lounges Staff**, with Competitions at specification.
- Designed shared service contracts and reusable internal packages for **TypeScript types, utility logic and UI components** (`@koloseum/types`, `@koloseum/utils`, `@koloseum/components` — publicly installable on npm).
- Designed PostgreSQL schemas, RPC interfaces and **Row-Level Security policies** covering role-based access, lounge operations, financial workflows and compliance. The declarative schema is 31,024 lines: 145 tables (RLS on all 145), 351 policies, 390 PL/pgSQL functions, 202 triggers, 299 indexes and 183 named CHECKs.
- Implemented authentication and authorisation spanning phone OTP, password login, TOTP and role/feature-based access control.
- **Shipped Public Authentication to production** (March–October 2025). 83 phone sign-ups produced 54 completed Player registrations (65%) through an age-gated flow with Smile ID identity verification; excluding three internal accounts, 51 of 80 external sign-ups completed (64%). Separate individual and company-account paths were both exercised by real users; the production database remains under active custody though the application is not currently serving traffic.
- Built Lounge financial workflows: Credits ledgers, top-ups with database-enforced daily caps, payment methods, subscriptions, entitlements, ownership transfers and payment-provider integration.
- Designed **Valkey/Redis-compatible caching** with tenant-scoped keys, TTL strategies and invalidation after mutable operations.
- Built automated testing using **Vitest, Playwright, MSW and Supawright**, including Snaplet-seeded Supabase environments: 41 Playwright spec files, 257 passing unit tests in `@koloseum/utils`, coverage of authentication, role-based access, session lifecycle, branch operations, inventory, eatery, finances and ownership transfer.
- Integrated third-party services through server-side and Edge Function workflows: Paystack, Flutterwave, GavaConnect (Kenya KRA eTIMS fiscal invoicing), Smile ID, SuprSend, Twilio, Zoho, Challonge and IGDB (ten Edge Functions, ~9,500 lines of TypeScript).
- Containerised services and maintained Kubernetes deployment configuration, health checks and shared ingress conventions. Application deploys are past tense; the production database is present tense.
- Integrated Sentry for monitoring. Maintain specifications covering business rules, service boundaries, database design, authorisation, testing and deployment. Manage work through a structured seven-step roadmap, patches, dependency upgrades and cross-service synchronisation.

**Selected environment:** TypeScript, SvelteKit, Svelte, PostgreSQL, PL/pgSQL, Supabase, Tailwind CSS, DaisyUI, Docker, Kubernetes, Valkey, Vitest, Playwright, MSW, Supawright, Sentry

**Public evidence:** [engineering showcase](https://github.com/koloseum-technologies/engineering-showcase) · [npm organisation](https://www.npmjs.com/org/koloseum) · readable stack sample: [man-of-substance](https://github.com/DavyK17/man-of-substance)

### FREELANCE SOFTWARE DEVELOPER
**July 2022 – Present**

Independent web developer delivering and maintaining sites for clients in Kenya, with a documented branch-to-staging-to-production workflow and Cloudflare Pages continuous deployment (per-pull-request preview environments and deploy checks on GitHub).

- **Arkad World Ltd** ([arkadworld.com](https://arkadworld.com)) — Kenyan conference interpreting, translation and conference management company. Migrated the marketing site from WordPress to Jekyll; four years of continuing maintenance (118 commits, 26 merged pull requests, July 2022–present) alongside a second contributor. The live footer credits the work by name. Sass, Jekyll and GSAP 3 (multilingual welcome animation) sit in this engagement. Contact form is Formspree + reCAPTCHA, not a custom backend.
- Other selected work includes Koloseum (above) and sites deployed on DigitalOcean and Cloudflare.

**Selected technologies:** JavaScript, TypeScript, Jekyll, Sass, GSAP, Cloudflare Pages, HTML5, CSS3

### TEKKEN 254
**Founder | Web Developer | Community Organiser**  
August 2017 – October 2021

Founded and developed a Kenyan competitive Tekken community and esports brand.

- Founded and operated a competitive gaming community, including the organisation's digital presence (website in **Jekyll, Bootstrap, Sass and Liquid**).
- Played a major role in organising **15 tournaments across three full seasons** of the TEKKEN 254 Circuit (now the Savanna Circuit) and **30+ editions** of Savanna Fight Night.
- Built relationships with competitors, organisers, sponsors and international esports stakeholders; created sponsorship and international-competition opportunities for Kenyan players.
- Developed first-hand expertise in competition administration later incorporated into Koloseum.

---

## SELECTED ENGINEERING PROJECT

### KOLOSEUM
**Full-Stack Esports Competition Platform**

Koloseum is a competition platform for esports in Kenya. Players discover, enter and follow structured competitions; organisers run Leagues, Challenges and Locals; Lounges get infrastructure for live events and branch operations.

**Architecture**

- Multi-service architecture organised into Public, Players, Lounges and Backroom domains
- Shared TypeScript packages for types, utilities and UI components (public on npm)
- PostgreSQL relational data layer with Supabase; database-enforced business rules and Row-Level Security
- Valkey caching for selected high-frequency reads
- Docker and Kubernetes deployment configuration
- Automated unit and end-to-end testing

**Engineering scope**

- Authentication and authorisation (age-gated registration, Smile ID, OTP, TOTP)
- Role and feature-based access control
- Player sessions and gaming-lounge operations
- Financial ledgers and service entitlements
- Compliance workflows
- Third-party payment, fiscal invoicing (KRA eTIMS), notification and identity integrations
- Automated testing and seeded environments
- Monitoring

**Current status:** Lounges Account, Lounges Staff, Lounges Operations and Players Sessions are completed; Competitions (the product centrepiece) is at specification; additional Player, Backroom and Public services remain on the roadmap. Public Authentication was deployed and operated with real users; it is not currently serving traffic. Full write-up: [engineering showcase](https://github.com/koloseum-technologies/engineering-showcase).

---

## EDUCATION & PROFESSIONAL DEVELOPMENT

**Full-Stack Engineer Certification** — Codecademy, 2023

**CS50: Introduction to Computer Science** — Harvard University, 2023

**BTEC Level 3 Extended Diploma in Sport** — Hadlow College, 2015–2017

**International General Certificate of Secondary Education (IGCSE)** — St. Mary's School, Nairobi, 2011–2013

---

## ADDITIONAL DOMAIN EXPERTISE

**Esports & Gaming Technology:** Competition platforms, tournament administration, gaming-lounge operations, player management, competition data, grassroots esports

**Product & Systems:** Requirements analysis, domain modelling, system architecture, technical specification, stakeholder communication, product development

**Community & Operations:** Esports community development, tournament operations, live-event technology, stakeholder relations

---
