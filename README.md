# Stephen Olayiwola — Portfolio (React + TypeScript + Tailwind)

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
```

**Images:** copy your existing `images/` folder (icons, portfolio screenshots,
`Stephen_Olayiwola.png`, resume PDF, etc.) into `public/images/` — paths in
the code already point to `/images/...`, so nothing else needs to change.

## What changed vs. the original

- Swiper.js and its CSS/JS files are gone. jQuery-style DOM manipulation
  (`document.getElementById`, `classList.add/remove`) was replaced with React
  state and refs throughout.
- Vanilla `IntersectionObserver` scroll-reveal → `useScrollReveal` hook,
  reused on every section instead of one shared selector list.
- `window.onscroll` header-glass effect → `useScrolled` hook.
- Theme toggle (dark/light + swapping the moon/sun icon) → `ThemeContext`.
- All CSS custom properties (`--bg-color`, `--text-main`, etc.) were kept
  as-is in `index.css` since the whole theme system depends on them — this
  was cheaper and safer than converting to Tailwind's dark-mode variants.
- Keyframe animations (`slideInUp`, `rotate-360`, `pulse`) were moved into
  `tailwind.config.js` and are applied via `animate-*` utility classes.

## The three specific fixes you asked for

**1. Right swipe / right arrow breaking after filtering (Portfolio section)**
The old Swiper instance used `loop: true` while the filter buttons hid slides
with `display: none` instead of removing them from the DOM. Swiper's internal
loop index no longer matched the visible slide count, so `slideNext()` (right
arrow, right swipe) silently stopped moving. The new carousel
(`useCarousel` + `useSwipe` hooks, no external library) derives the slide
count directly from the *actual* filtered array on every render — there's no
separate internal index that can go stale, so both directions always work,
with or without an active filter.

**2. Services cards different sizes**
`ServiceCard` in `Services.tsx` now has a fixed `h-[340px] w-[300px]` (with
matching adjustments at the two smaller breakpoints), so all three cards are
always identical regardless of description length.

**3. Site shouldn't appear until images are loaded**
`useImagePreload` (in `src/hooks/useImagePreload.ts`) preloads every image
used on the page — see the full list in `src/data/images.ts` — before `App`
renders anything but a loading screen (`src/components/Loader.tsx`) with a
progress bar. There's a 6-second fail-safe so a single broken image link
can't block the site forever.

## Notes / things you may want to revisit

- The "View Demo" video links (`project-details.html?video=...`) weren't
  carried over since that page isn't part of this conversion — only "View
  Site"/"View App" links are wired up in `PortfolioCard.tsx`. Let me know if
  you want a demo modal/page added.
- The desktop/mobile breakpoint for the hamburger menu is kept at `700px` to
  match your original CSS exactly.
