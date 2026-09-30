# e-plantShopping — Paradise Nursery

A React and Redux shopping application for an online houseplant nursery.

## Features
- Landing page with background image, company introduction, and Get Started link.
- 18 unique plants across three categories (six per category), each with a local botanical illustration, description, name, and price.
- Redux Toolkit cart: add, increment, decrement, delete, total quantity, and precise totals calculated in cents.
- Add to Cart disables while a plant is in the cart and re-enables when removed.
- Shared Home, Plants, and Cart navigation with a dynamic quantity badge.
- Checkout displays Coming Soon; Continue Shopping returns to the catalog.
- Responsive layout and accessible button labels.

## Run
```sh
npm install
npm run dev
```

## Build
```sh
npm run build
```

## Live application
https://Datboy-Cj.github.io/e-plantShopping/

## Source guide
The required assignment files are in `src/`: `AboutUs.jsx`, `App.css`, `App.jsx`, `CartSlice.jsx`, `ProductList.jsx`, and `CartItem.jsx`. The Redux store and Provider are configured in `src/main.jsx`. Local SVG illustrations are in `public/`.

## Validation
Run `npm test` to check cart totals, quantity updates, duplicate additions, removals, and invalid quantities against the actual application modules.

## Automated checks

Use Node 24 and pnpm 11.28.2. Run `pnpm install --frozen-lockfile`, `pnpm test`, and `pnpm build`.
For browser checks, run `pnpm exec playwright install chromium webkit`, then `pnpm test:browser`.
The browser suite checks desktop Chromium, WebKit, and a mobile Chromium viewport.
It verifies cart totals, quantity controls, deletion, empty-cart behavior, the checkout notice, and navigation.
Use `pnpm test:browser:report` to open the report.

GitHub Actions runs these checks on pushes and pull requests. Dependabot proposes weekly package updates and monthly GitHub Actions updates; updates are not automatically merged.
