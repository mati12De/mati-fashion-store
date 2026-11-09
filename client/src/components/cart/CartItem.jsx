"use client";

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  const { product, size, quantity } = item;

  return (
    <article className="cart-item">
      <img src={product.image} alt={product.name} />

      <div className="cart-item-details">
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        <span>Size: {size}</span>

        <div className="quantity-controls">
          <button
            type="button"
            onClick={() => onUpdateQuantity(quantity - 1)}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span>{quantity}</span>

          <button
            type="button"
            onClick={() => onUpdateQuantity(quantity + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button type="button" className="remove-item" onClick={onRemove}>
          Remove
        </button>
      </div>

      <strong>ETB {(product.price * quantity).toLocaleString("en-US")}</strong>
    </article>
  );
}
