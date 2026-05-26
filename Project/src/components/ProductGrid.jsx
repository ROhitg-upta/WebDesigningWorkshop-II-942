import React from "react";
import ProductCard from "./ProductCard.jsx";

function ProductGrid({
  products,
  selectedCategory,
  searchTerm,
  onAddToCart,
  onViewDetails
}) {
  return (
    <section className="products-section" id="products">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Recommended for you</p>
          <h2>
            {selectedCategory === "All"
              ? "Today's top picks"
              : `${selectedCategory} deals`}
          </h2>
        </div>
        <span>{products.length} products found</span>
      </div>

      {products.length === 0 ? (
        <div className="empty-state">
          <h3>No products found</h3>
          <p>Try a different search term or choose another category.</p>
          {searchTerm && <strong>Search: "{searchTerm}"</strong>}
        </div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductGrid;
