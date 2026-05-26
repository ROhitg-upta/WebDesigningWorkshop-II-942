# Amazon Clone React Mini Project

A fully responsive Amazon-style homepage clone built with HTML5, CSS3, JavaScript ES6, and React functional components. This is a frontend-only college mini project with product search, category filtering, cart state, product details, login/register UI, dark mode, toast messages, and responsive design.

## Technologies Used

- HTML5
- CSS3 with Flexbox, CSS Grid, transitions, and media queries
- JavaScript ES6
- React functional components
- React Hooks: `useState`, `useEffect`, `useMemo`, `useRef`
- Vite for fast local development

## Folder Structure

```text
amazon-clone-react/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    ├── components/
    │   ├── AuthModal.jsx
    │   ├── CartDrawer.jsx
    │   ├── CategoryMenu.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── LoadingSpinner.jsx
    │   ├── Navbar.jsx
    │   ├── ProductCard.jsx
    │   ├── ProductGrid.jsx
    │   ├── ProductModal.jsx
    │   ├── ScrollToTop.jsx
    │   └── Toast.jsx
    └── data/
        └── products.js
```

## Features

- Amazon-style navbar with logo, search bar, cart button, login, register, and dark mode
- Responsive category menu
- Hero banner with deal section
- 12 sample products with image, title, price, rating, category, and description
- Search products by name
- Filter products by category
- Product details modal
- Add to cart and remove from cart
- Quantity increase/decrease counter
- Dynamic cart subtotal calculation
- Login/Register frontend-only modal
- Loading spinner
- Toast message after adding a product
- Scroll-to-top button
- Fully responsive layout for desktop, tablet, and mobile

## Installation Commands

Open the project folder in VS Code and run:

```bash
npm install
npm run dev
```

If PowerShell blocks `npm.ps1` on Windows, run:

```bash
npm.cmd install
npm.cmd run dev
```

## Steps to Run in VS Code

1. Open VS Code.
2. Open this project folder.
3. Open the terminal with `Ctrl + backtick`.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the localhost link shown in the terminal, usually `http://localhost:5173`.

## Build Command

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Sample Screenshots Description

- Desktop homepage: A dark Amazon-style navbar, large search bar, category menu, full-width shopping hero banner, and product grid.
- Product cards: Modern white cards with product images, ratings, prices, hover effects, and add-to-cart buttons.
- Cart drawer: A right-side cart panel with product quantity controls, remove buttons, and live subtotal.
- Product details popup: A modal with a large product image, description, rating, price, and add-to-cart button.
- Mobile view: A compact navbar with menu button, responsive search bar, stacked product cards, and touch-friendly controls.
- Dark mode: The same layout switches to a darker shopping dashboard style while keeping Amazon-like accent colors.

## Viva Questions and Answers

### 1. What is the main purpose of this project?

This project creates a frontend Amazon-style shopping website where users can browse products, search, filter by category, view details, and manage a shopping cart.

### 2. Which React hooks are used?

The project uses `useState` for UI and cart state, `useEffect` for loading and scroll behavior, `useMemo` for filtered product calculations, and `useRef` for the toast timer.

### 3. Why is product data stored in a separate file?

The product list is stored in `src/data/products.js` to keep the code clean and make it easy to update products without changing component logic.

### 4. How does Add to Cart work?

When the user clicks Add to Cart, the selected product is added to the `cartItems` state. If it already exists, only its quantity is increased.

### 5. How is the cart total calculated?

The cart total is calculated using `reduce()`, multiplying each product price by its quantity and adding all values together.

### 6. How does product search work?

The search input updates `searchTerm` state. Products are filtered by checking whether each product title contains the typed search text.

### 7. How does category filtering work?

The selected category is stored in `selectedCategory`. If it is `All`, every product is shown. Otherwise, only matching category products are displayed.

### 8. Is there a backend in this project?

No. This is a frontend-only project. Login, register, cart, and products are handled in React state for demonstration.

### 9. How is the website responsive?

The CSS uses Flexbox, CSS Grid, and media queries to adjust the navbar, product grid, hero section, cart drawer, and footer for different screen sizes.

### 10. What makes this project beginner-friendly?

The project uses simple components, clear file names, readable state functions, separate product data, and comments where useful.

## Image Credits

Product and hero images are loaded from royalty-free Unsplash image URLs and are used for educational project display.
