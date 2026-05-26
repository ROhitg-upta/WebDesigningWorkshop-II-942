import React from "react";

function Navbar({
  searchTerm,
  onSearchChange,
  cartCount,
  onCartOpen,
  onAuthOpen,
  isDarkMode,
  onDarkModeToggle,
  isMenuOpen,
  onMenuToggle
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <header className="site-header">
      <nav className="navbar">
        <button
          className="icon-button mobile-menu-button"
          onClick={onMenuToggle}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? "x" : "menu"}
        </button>

        <a href="#top" className="amazon-logo" aria-label="Amazon clone home">
          <span>amazon</span>
          <small>.in</small>
        </a>

        <form className="search-box" onSubmit={handleSubmit}>
          <select aria-label="Search department">
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home</option>
            <option>Books</option>
          </select>
          <input
            type="search"
            placeholder="Search Amazon Clone"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
          />
          <button type="submit" aria-label="Search products">
            <span aria-hidden="true">&#128269;</span>
          </button>
        </form>

        <div className={isMenuOpen ? "nav-actions open" : "nav-actions"}>
          <button className="nav-link" onClick={() => onAuthOpen("login")}>
            <small>Hello, sign in</small>
            <strong>Account</strong>
          </button>

          <button className="nav-link" onClick={() => onAuthOpen("register")}>
            <small>New customer?</small>
            <strong>Register</strong>
          </button>

          <button
            className="theme-toggle"
            onClick={onDarkModeToggle}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? "Light" : "Dark"}
          </button>

          <button
            className="cart-button"
            onClick={onCartOpen}
            aria-label="Open shopping cart"
          >
            <span className="cart-icon" aria-hidden="true">
              &#128722;
            </span>
            <span className="cart-count">{cartCount}</span>
            <strong>Cart</strong>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
