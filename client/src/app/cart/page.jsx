"use client";

import Link from "next/link";

import { useCart } from "@/components/cart/CartProvider";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import Header from "@/components/layout/Header";

export default function CartPage() {
  const { items, subtotal, cartCount, updateQuantity, removeFromCart } =
    useCart();

  return (
    <main className="cart-page">
      <Header cartCount={cartCount} />

      <div className="cart-heading">
        <span className="section-label">YOUR SELECTION</span>
        <h1>Shopping Bag</h1>
        <p>Review your selected pieces before checkout.</p>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <h2>Your bag is currently empty.</h2>
          <p>Discover something you love from the MATI collection.</p>

          <Link href="/" className="primary-button">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <section className="cart-items">
            {items.map((item) => (
              <CartItem
                key={`${item.product.id}-${item.size}`}
                item={item}
                onUpdateQuantity={(quantity) =>
                  updateQuantity(item.product.id, item.size, quantity)
                }
                onRemove={() => removeFromCart(item.product.id, item.size)}
              />
            ))}
          </section>

          <CartSummary subtotal={subtotal} />
        </div>
      )}
    </main>
  );
}
