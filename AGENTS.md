# Repository Guidelines

This guide supports contributors building and maintaining the TourEx Next.js application.

## Project Structure & Module Organization
Core routes live under `src/app`, where each folder maps to a customer-facing page (home variants, tours, auth screens). Shared building blocks sit in `src/components` and `src/ui`, while full-page scaffolds live in `src/layouts`. Global state is isolated in `src/redux` with feature slices under `src/redux/features/<feature>`, and static seed data stays in `src/data`. Place utilities in `src/utils`, reusable hooks in `src/hooks`, and global styles in `src/styles/index.css`. Static assets belong in `public/` and icon markup in `src/svg/`.

## Build, Test, and Development Commands
Run `npm run dev` for a hot-reloading dev server at `http://localhost:3000`. Use `npm run build` to produce the production bundle verified by Next.js. Validate the build with `npm run start`. Enforce lint rules with `npm run lint` before committing.

## Coding Style & Naming Conventions
Write React components as typed function components with 2-space indentation, trailing commas, and single quotes in TS/TSX. Name components and layouts in PascalCase (for example, `TourCard.tsx`); hooks start with `use` and camelCase (for example, `useBookingFilter.ts`). Group Redux slices by domain inside `src/redux/features`. Keep styles modular - add global rules in `src/styles/index.css`, and component-scoped styles in colocated `.module.scss` files. Resolve lint warnings instead of disabling rules.

## Testing Guidelines
Automated tests are not yet provisioned. When adding coverage, create Jest + React Testing Library suites under `src/__tests__/` with descriptive names such as `tour-card.test.tsx`. Add integration smoke tests for critical Next routes before merging complex flows, and document manual checks in the pull request when automation is unavailable.

## Commit & Pull Request Guidelines
Author commits in imperative present tense (for example, `Add booking filter slice`) and keep scope focused. Pull requests should include a concise summary, linked issue or task, screenshots for UI changes, and a testing checklist (`lint`, manual flows, new specs`). Request review from a teammate familiar with the affected area and wait for green CI prior to merge.
