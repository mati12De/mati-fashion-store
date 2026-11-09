"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import Header from "@/components/layout/Header";

const sizes = ["S", "M", "L", "XL"];

export default function ProductDetailsClient({ product }) {
  const { cartCount, addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState("");
  const [message, setMessage] = useState("");

  function handleAddToBag() {
    if (!selectedSize) {
      setMessage("Please select your size first.");
      return;
    }

    addToCart(product, selectedSize);
    setMessage("Added to your bag successfully.");
  }

  return (
    <main className="product-page">
      <Header cartCount={cartCount} />

      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <span className="product-category">{product.category}</span>

          <h1>{product.name}</h1>

          <p className="product-price">ETB {product.price.toLocaleString()}</p>

          <p className="product-description">{product.description}</p>

          <div className="size-section">
            <h3>Select Size</h3>

            <div className="size-options">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={selectedSize === size ? "size-active" : ""}
                  onClick={() => {
                    setSelectedSize(size);
                    setMessage("");
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="add-to-bag-button"
            onClick={handleAddToBag}
          >
            ADD TO BAG
          </button>

          {message && (
            <p className="product-message" role="status">
              {message}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
