import React from "react";

function CartDrawer({
  isOpen,
  items,
  total,
  onClose,
  onRemove,
  onQuantityChange
}) {
  return (
    <aside className={isOpen ? "cart-drawer open" : "cart-drawer"}>
      <div className="cart-header">
        <div>
          <p className="eyebrow">Shopping cart</p>
          <h2>Your Basket</h2>
        </div>
        <button className="close-button" onClick={onClose} aria-label="Close cart">
          x
        </button>
      </div>

      {items.length === 0 ? (
        <div className="cart-empty">
          <h3>Your cart is empty</h3>
          <p>Add products to see quantity controls and live total calculation.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>&#8377;{item.price.toLocaleString("en-IN")}</p>
                  <div className="quantity-control">
                    <button
                      onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                      aria-label={`Decrease ${item.title} quantity`}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                      aria-label={`Increase ${item.title} quantity`}
                    >
                      +
                    </button>
                  </div>
                  <button className="remove-button" onClick={() => onRemove(item.id)}>
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="cart-total">
            <span>Subtotal</span>
            <strong>&#8377;{total.toLocaleString("en-IN")}</strong>
            <button className="amazon-button wide">Proceed to Buy</button>
          </div>
        </>
      )}
    </aside>
  );
}

export default CartDrawer;
