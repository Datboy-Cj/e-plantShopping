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
