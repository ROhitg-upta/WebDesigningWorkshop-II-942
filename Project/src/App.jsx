import React, { useEffect, useMemo, useRef, useState } from "react";
import { products } from "./data/products.js";
import Navbar from "./components/Navbar.jsx";
import CategoryMenu from "./components/CategoryMenu.jsx";
import Hero from "./components/Hero.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import ProductModal from "./components/ProductModal.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import AuthModal from "./components/AuthModal.jsx";
import Footer from "./components/Footer.jsx";
import Toast from "./components/Toast.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState("");
  const toastTimer = useRef(null);

  const categories = useMemo(() => {
    return ["All", ...new Set(products.map((product) => product.category))];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 850);

    return () => clearTimeout(timer);
  }, []);

  function showToast(message) {
    setToastMessage(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => {
      setToastMessage("");
    }, 2200);
  }

  function addToCart(product) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });

    showToast(`${product.title} added to cart`);
  }

  function removeFromCart(productId) {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  }

  function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  function handleCategorySelect(category) {
    setSelectedCategory(category);
    setIsMenuOpen(false);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  }

  function handleHeroAction() {
    setSelectedCategory("Electronics");
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  }

  function openAuth(mode) {
    setAuthMode(mode);
    setIsAuthOpen(true);
  }

  function handleAuthSubmit(mode) {
    setIsAuthOpen(false);
    showToast(mode === "login" ? "Welcome back!" : "Account created!");
  }

  return (
    <div className={isDarkMode ? "app app-dark" : "app"}>
      <Navbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        cartCount={cartCount}
        onCartOpen={() => setIsCartOpen(true)}
        onAuthOpen={openAuth}
        isDarkMode={isDarkMode}
        onDarkModeToggle={() => setIsDarkMode((mode) => !mode)}
        isMenuOpen={isMenuOpen}
        onMenuToggle={() => setIsMenuOpen((open) => !open)}
      />

      <CategoryMenu
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        isMenuOpen={isMenuOpen}
      />

      <main>
        <Hero onShopNow={handleHeroAction} />

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <ProductGrid
            products={filteredProducts}
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
            onAddToCart={addToCart}
            onViewDetails={setSelectedProduct}
          />
        )}
      </main>

      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        total={cartTotal}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
        onQuantityChange={updateQuantity}
      />

      <AuthModal
        isOpen={isAuthOpen}
        mode={authMode}
        onModeChange={setAuthMode}
        onClose={() => setIsAuthOpen(false)}
        onSubmit={handleAuthSubmit}
      />

      <Toast message={toastMessage} />
      <ScrollToTop />
    </div>
  );
}

export default App;
