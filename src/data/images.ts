import { services } from './services';
import { portfolioItems } from './portfolio';

// Every image referenced anywhere on the page. Used by useImagePreload so the
// site only renders once everything is actually cached in the browser.
export const allSiteImages: string[] = [
  '/images/Above title line (1).png',
  '/images/moon (1).png',
  '/images/sun (1).png',
  '/images/back (1).png',
  '/images/Stephen_Olayiwola.png',
  '/images/Github (1).png',
  '/images/Linkedin (1).png',
  '/images/Twitter (1).png',
  '/images/Icon (9).png',
  '/images/Icon (11).png',
  '/images/Icon (13).png',
  '/images/Link (1).png',
  '/images/Instagram (1).png',
  ...services.map((s) => s.icon),
  ...portfolioItems.map((p) => p.image),
];
