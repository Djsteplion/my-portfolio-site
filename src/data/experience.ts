import type { ExperienceItem } from '../types';

export const experienceItems: ExperienceItem[] = [

{
  id: 'creatorrealm',
  company: 'CreatorRealm',
  //companyUrl: 'https://creator-realm-dev-mode.netlify.app/',
  companyUrl: 'https://creatorrealm.com/',
  role: 'Frontend Engineer',
  location: 'Remote · Contract',
  timeFrame: '2026 - Contract',
  tools: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'CSS',
    'REST APIs',
    'WebSockets',
    'Flutterwave'
  ],
  responsibilities: [
    'Engineered responsive, production-ready frontend experiences using React, TypeScript, Tailwind CSS, and custom CSS across CreatorRealm’s creator, client, marketplace, communication, and financial workflows.',

    'Designed and implemented custom animations, interactions, and visual experiences specifically for CreatorRealm across multiple pages, including the landing page, using React, Tailwind CSS, and CSS animations.',

    'Reworked and implemented onboarding flows, integrating REST APIs to fetch and submit user data while handling asynchronous states, validation, errors, and successful submissions.',

    'Architected and developed a feature-rich multi-role chat application with role-specific interfaces and functionality for clients and creators while keeping shared conversations and communication state synchronized.',

    'Built advanced chat functionality including an in-chat calculator, calendar, contextual shortcut actions, and quick-access controls for viewing the other participant’s profile, proposals, jobs, contracts, location, ratings, and related information.',

    'Implemented real-time chat interfaces with conversation lists, unread-message indicators, responsive layouts, and efficient navigation across active conversations.',

    'Developed a restricted-words mechanism that detects prohibited terms in outgoing messages, prevents restricted messages from being sent, and provides contextual warnings to users.',

    'Implemented notifications functionality to surface relevant user and platform events across the application while integrating frontend state with backend API data.',

    'Built identity-verification interfaces that collect required user information, submit verification data to backend services, and reflect real-time verification status as submissions are reviewed by administrators.',

    'Developed job-management interfaces with tabbed views for all jobs, recent jobs, and matched jobs, incorporating API-driven data, pagination, filtering, and responsive UI states where required.',

    'Implemented client offer workflows allowing creators to review offers and accept or reject them, with frontend state and API interactions reflecting the resulting workflow status.',

    'Built project and milestone-based contract interfaces supporting contract submission, resubmission, status tracking, and related workflow states across different contract types.',

    'Developed wallet functionality allowing users to view financial information including available balances and interact with deposit and withdrawal workflows through backend-integrated interfaces.',

    'Implemented payment-related frontend functionality with Flutterwave, including a custom receipt-generation component that verifies successful transactions through the backend before generating a polished, downloadable payment receipt.',

    'Developed and refined contract, proposal, escrow, job, creator-profile, marketplace, and financial interfaces, translating complex business workflows into intuitive user experiences.',

    'Contributed to the development of the administrative dashboard by implementing portions of the frontend UI alongside another frontend engineer.',

    'Built reusable components and frontend interaction patterns across the platform, improving consistency, maintainability, and development efficiency across multiple product areas.',

    'Integrated frontend applications with REST APIs and real-time services, handling asynchronous data, loading states, error handling, authentication-related flows, and synchronized application state.',

    'Optimized frontend performance and loading behavior through efficient rendering, component-level optimization, asset handling, and responsive implementation practices.',

    'Collaborated with product and engineering requirements to debug issues, refine existing functionality, and continuously improve the usability, reliability, and performance of the platform.'
  ],
},

  {
    id: 'atc-africa',
    company: 'ATC-AFRICA',
    companyUrl: 'https://atcafrica.com/',
    role: 'Front-end Web Developer',
    location: 'Remote',
    timeFrame: 'Oct 2023 - July 2026 · ',
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query'],
    responsibilities: [
      'Architected and developed responsive web applications with Next.js, React, TypeScript, and Tailwind CSS, focusing on maintainability, performance, and scalable frontend architecture.',
      'Designed and implemented data-fetching patterns with TanStack Query, leveraging caching, request deduplication, and server-state management to improve application responsiveness and reduce unnecessary network requests.',
      'Translated high-fidelity Figma designs into accessible, responsive, and pixel-accurate interfaces across desktop, tablet, and mobile breakpoints.',
      'Built reusable UI components and frontend patterns that improved consistency across projects and reduced development effort for recurring features.',
      'Optimized page performance through efficient rendering strategies, asset optimization, and component-level improvements, contributing to strong Lighthouse performance across managed projects.',
      'Collaborated with designers and stakeholders to turn product requirements into production-ready interfaces while maintaining a high standard of visual and technical quality.',
    ],
  },

  {
    id: 'sabo',
    company: 'SABO',
    role: 'Frontend Engineer',
    location: 'Hybrid',
    timeFrame: 'Feb 2022 - Dec 2025 ·',
    tools: ['React', 'TypeScript', 'Tailwind CSS'],
    responsibilities: [
      'Architected and developed the frontend of a real-time web chatting application using React, TypeScript, and Tailwind CSS, with emphasis on reusable architecture and responsive user experiences.',
      'Engineered a USD-to-NGN currency conversion tool with precise calculation logic and dynamic data handling to support accurate financial conversions.',
      'Built data-intensive dashboard interfaces with dynamic filtering, sorting, and optimized rendering to provide efficient interaction with large datasets.',
      'Developed reusable components and shared frontend patterns that reduced implementation time for recurring features and improved consistency across the application.',
      'Implemented frontend testing practices using test-driven development principles, achieving high test coverage across critical business logic and reducing regression risk.',
      'Translated complex UI/UX designs into responsive production interfaces while optimizing rendering and page-loading performance across core application pages.',
      'Diagnosed and resolved frontend bugs across application features, improving stability and maintaining consistent behavior across supported browsers and screen sizes.',
    ],
  },

  {
    id: 'jojega',
    company: 'JOJEGA - CONCEPT',
    companyUrl: 'https://jojegaconcept.com/',
    role: 'Mobile App Developer (Flutter)',
    location: 'Remote',
    timeFrame: 'Jun 2025 - Dec 2025 · ',
    tools: ['Dart', 'Flutter', 'BLoC', 'Provider'],
    responsibilities: [
      'Developed responsive, production-ready mobile interfaces using Flutter and Dart, translating product requirements and UI designs into reusable application components.',
      'Implemented scalable state-management patterns using BLoC and Provider to separate presentation logic from application state and improve maintainability.',
      'Built reusable Flutter widgets and navigation patterns that accelerated feature development and maintained UI consistency across the application.',
      'Optimized mobile interfaces for smooth interaction, responsive layouts, and consistent behavior across different screen sizes.',
    ],
  },
];
