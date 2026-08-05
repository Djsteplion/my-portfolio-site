import type { ExperienceItem } from '../types';

export const experienceItems: ExperienceItem[] = [
  {
    id: 'atc-africa',
    company: 'ATC-AFRICA',
    companyUrl: 'https://atcafrica.com/',
    role: 'Front-end Web Developer',
    location: 'Oyo State, Nigeria',
    timeFrame: 'Oct 2023 - Present . Part-time',
    tools: ['Next.js', 'Tailwind-css'],
    responsibilities: [
      'Developed frontend architectures using Next.js and Tailwind CSS, achieving a commendable Lighthouse performance score across managed web projects.',
      'Architected a data-fetching layer using TanStack Query, implementing a caching strategy that reduced server load by 40%.',
      'Implemented robust testing using Jest and React Testing Library, thus achieving 80% code coverage & a significant reduction in production regressions.',
      'Translated high-fidelity Figma designs into pixel-perfect, interactive websites.',
      'Streamlined production pipeline by creating reusable components, cutting frontend development time for new features by 25%.',
    ],
  },
  {
    id: 'Sabo',
    company: 'SABO',
    role: 'Front-end Web Developer',
    location: 'Oyo State, Nigeria',
    timeFrame: 'Feb 2022 - Dec 2025 . Full-time',
    tools: ['React.js', 'Tailwind', 'Typescript'],
    responsibilities: [
      'Architected the frontend of a web chatting application using react.js, tailwindcss and typescript.',
      'Engineered a custom USD-to-NGN currency conversion tool, implementing precise calculation logic to handle fluctuating real-time data.',
      'Architected a data-rich dashboard with dynamic filtering and optimized rendering for large datasets.',
      'Engineered a TDD workflow that ensured 90% code coverage for critical business logic.',
      'Streamlined production pipeline by creating reusable components, cutting frontend development time for new features by 15%.',
      'Implemented intricate design concepts provided by the UI/UX designer, ensuring a 1.2-second reduction in First Contentful Paint (FCP) for core pages.',
    ],
  },
  {
    id: 'Jojega',
    company: 'JOJEGA - CONCEPT',
    companyUrl: 'https://jojegaconcept.com/',
    role: 'Mobile App Developer(Flutter)',
    location: 'Oyo State, Nigeria',
    timeFrame: 'Jun 2025 - Dec 2025 . Part-time',
    tools: ['Dart', 'Flutter'],
    responsibilities: [
      'Implemented smooth in-app navigation using the Get-X package and managed app state via BLoC & Provider to improve scalability and performance.',
      'Engineered high-performance, responsive UI components using Flutter widgets and Dart.',
      'Streamlined production pipeline by creating reusable components, cutting development time for new features.',
    ],
  },
];
