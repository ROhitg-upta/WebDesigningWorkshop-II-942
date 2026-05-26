import React from "react";

function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) {
    return null;
  }

  function handleAddToCart() {
    onAddToCart(product);
    onClose();
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close-button" onClick={onClose} aria-label="Close">
          x
        </button>

        <img src={product.image} alt={product.title} />

        <div className="modal-content">
          <span className="product-category">{product.category}</span>
          <h2 id="product-modal-title">{product.title}</h2>
          <div className="rating-row">
            <span className="stars" aria-hidden="true"></span>
            <span>{product.rating} out of 5</span>
          </div>
          <p>{product.description}</p>
          <p className="price">&#8377;{product.price.toLocaleString("en-IN")}</p>
          <ul>
            <li>Free delivery on eligible orders</li>
            <li>7-day replacement support</li>
            <li>Secure frontend checkout demo</li>
          </ul>
          <button className="amazon-button wide" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProductModal;
