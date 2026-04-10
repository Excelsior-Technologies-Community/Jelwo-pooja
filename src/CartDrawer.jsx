import { useState } from "react";

function formatCartAmount(amount) {
  return Number.isInteger(amount) ? String(amount) : amount.toFixed(2);
}

function CartDrawer({
  isOpen,
  cartItems,
  cartCount,
  cartSubtotal,
  onClose,
  onViewCart,
  onUpdateQuantity,
  onRemoveItem,
}) {
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const shippingRemaining = Math.max(85 - cartSubtotal, 0).toFixed(2);
  const shippingProgress = Math.min((cartSubtotal / 85) * 100, 100);

  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="cart-drawer__backdrop"
          aria-label="Close cart"
          onClick={onClose}
        ></button>
      )}

      <aside className={`cart-drawer ${isOpen ? "is-open" : ""}`}>
        <div className="cart-drawer__promo">
          New customers save 10% with code <strong>WELCOME10</strong>
        </div>

        <div className="cart-drawer__header">
          <h2>
            My shopping cart
            <span className="cart-drawer__count">({cartCount})</span>
          </h2>
          <button type="button" aria-label="Close cart" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="cart-drawer__shipping">
          <p>Spend Rs. {shippingRemaining} more and get free shipping!</p>
          <div className="cart-drawer__progress">
            <span style={{ width: `${shippingProgress}%` }}></span>
          </div>
        </div>

        <div className="cart-drawer__items">
          {cartItems.length === 0 ? (
            <p className="cart-drawer__empty">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <article className="cart-drawer__item" key={`${item.id}-${item.variant}`}>
                <div className="cart-drawer__thumb">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="cart-drawer__details">
                  <h3>{item.title}</h3>
                  <p className="cart-drawer__price">
                    <span>{item.price}</span>
                    {item.oldPrice && <del>{item.oldPrice}</del>}
                  </p>
                  {/^\d+$/.test(String(item.variant)) ? (
                    <p className="cart-drawer__variant">
                      Size: <span>{item.variant}</span>
                    </p>
                  ) : (
                    <p className="cart-drawer__variant">
                      Color: <span>{item.variant}</span>
                    </p>
                  )}

                  <div className="cart-drawer__actions">
                    <div className="cart-drawer__qty">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => onUpdateQuantity(item.id, item.variant, -1)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => onUpdateQuantity(item.id, item.variant, 1)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="cart-drawer__remove"
                      aria-label="Remove item"
                      onClick={() => onRemoveItem(item.id, item.variant)}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="cart-drawer__instructions">
          <button
            type="button"
            className="cart-drawer__instructions-toggle"
            onClick={() => setIsInstructionsOpen((prev) => !prev)}
          >
            <span>Order special instructions</span>
            <i className={`fa ${isInstructionsOpen ? "fa-chevron-up" : "fa-chevron-down"}`} aria-hidden="true"></i>
          </button>

          {isInstructionsOpen && (
            <textarea
              className="cart-drawer__instructions-input"
              placeholder="Order special instructions"
            ></textarea>
          )}
        </div>

        <div className="cart-drawer__footer">
          <div className="cart-drawer__subtotal">
            <strong>Subtotal</strong>
            <span>Rs. {formatCartAmount(cartSubtotal)}</span>
          </div>
          <p>Taxes, discounts and shipping calculated at checkout.</p>
          <div className="cart-drawer__footer-actions">
            <button
              type="button"
              className="cart-drawer__view-cart"
              onClick={onViewCart}
            >
              VIEW CART
            </button>
            <button type="button" className="cart-drawer__checkout">CHECKOUT</button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default CartDrawer;
