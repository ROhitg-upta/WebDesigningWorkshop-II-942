import React from "react";

function ProductCard({ product, onAddToCart, onViewDetails }) {
  return (
    <article className="product-card">
      <button
        className="product-image-button"
        onClick={() => onViewDetails(product)}
        aria-label={`View details for ${product.title}`}
      >
        <img src={product.image} alt={product.title} />
      </button>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.title}</h3>
        <div className="rating-row">
          <span className="stars" aria-hidden="true"></span>
          <span>{product.rating}</span>
        </div>
        <p className="price">&#8377;{product.price.toLocaleString("en-IN")}</p>
      </div>

      <div className="product-actions">
        <button className="secondary-button" onClick={() => onViewDetails(product)}>
          Details
        </button>
        <button className="amazon-button" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
