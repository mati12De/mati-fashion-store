export default function CartSummary({ subtotal }) {
  return (
    <aside className="cart-summary">
      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Subtotal</span>
        <strong>ETB {subtotal.toLocaleString("en-US")}</strong>
      </div>

      <div className="summary-row">
        <span>Shipping</span>
        <span>Calculated at checkout</span>
      </div>

      <div className="summary-total">
        <span>Total before shipping</span>
        <strong>ETB {subtotal.toLocaleString("en-US")}</strong>
      </div>

      <button type="button" className="checkout-button">
        Continue to Checkout
      </button>

      <p>Shipping and delivery details will be confirmed at checkout.</p>
    </aside>
  );
}
