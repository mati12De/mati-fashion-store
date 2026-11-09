"use client";

import { useState } from "react";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";

import { products } from "@/data/products";
import ProductSection from "@/components/home/ProductSection";
import { useCart } from "@/components/cart/CartProvider";
const sizes = ["S", "M", "L", "XL"];

export default function Home() {
  const { cartCount, addToCart } = useCart();
  const [activeProduct, setActiveProduct] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [addedProduct, setAddedProduct] = useState(null);

  function handleSizeSelect(productId, size) {
    setSelectedSizes((previous) => ({
      ...previous,
      [productId]: size,
    }));
  }

  function handleAddToBag(product) {
    const selectedSize = selectedSizes[product.id];

    if (!selectedSize) {
      setActiveProduct(product.id);
      return;
    }

    addToCart(product, selectedSize);

    setAddedProduct(product.id);
    setActiveProduct(null);

    setTimeout(() => {
      setAddedProduct(null);
    }, 2000);
  }
  return (
    <main>
      {/* HEADER */}
      <Header cartCount={cartCount} />

      {/* HERO */}
      <Hero />

      {/* CATEGORIES */}
      <CategoryGrid />

      {/* NEW ARRIVALS */}
      <ProductSection
        products={products}
        activeProduct={activeProduct}
        selectedSizes={selectedSizes}
        addedProduct={addedProduct}
        setActiveProduct={setActiveProduct}
        handleSizeSelect={handleSizeSelect}
        handleAddToBag={handleAddToBag}
      />
      {/* PHILOSOPHY */}
      <section className="philosophy-section" id="philosophy">
        <div className="philosophy-image">
          <div className="philosophy-image-content">
            <span>MATI — OUR PHILOSOPHY</span>
          </div>
        </div>

        <div className="philosophy-content">
          <span className="section-label">OUR PHILOSOPHY</span>

          <h2>
            Less, but
            <br />
            <span>better.</span>
          </h2>

          <p>
            We believe great style is not about having more. It is about
            choosing better. Every piece in the MATI collection is selected with
            attention to quality, comfort, and timeless design.
          </p>

          <a href="#categories" className="primary-button">
            Discover Our Collection
          </a>
        </div>
      </section>

      {/* VIRTUAL FITTING ROOM */}
      <section className="fitting-room-section" id="fitting-room">
        <div className="fitting-room-content">
          <span className="section-label">A NEW WAY TO EXPERIENCE FASHION</span>

          <h2>
            Your style.
            <br />
            Your fitting room.
          </h2>

          <p>
            Experience the future of shopping. Explore our virtual fitting room
            and discover how your next favorite outfit could look on you.
          </p>

          <button
            type="button"
            className="primary-button"
            onClick={() => alert("Virtual fitting room is coming soon!")}
          >
            Enter Fitting Room ↗
          </button>
        </div>

        <div className="fitting-room-visual">
          <div className="fitting-room-placeholder">
            <span>MATI VIRTUAL FITTING</span>
            <h3>See it. Try it. Own it.</h3>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              MATI<span>.</span>
            </Link>

            <p>Modern essentials. Thoughtful design. A better way to shop.</p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <a href="#categories">Categories</a>
            <a href="#new-arrivals">New Arrivals</a>
            <a href="#fitting-room">Virtual Fitting</a>
          </div>

          <div className="footer-column">
            <h4>About MATI</h4>
            <a href="#philosophy">Our Philosophy</a>
            <a href="#philosophy">Our Story</a>
            <a href="#philosophy">Contact</a>
          </div>

          <div className="footer-column">
            <h4>Customer Care</h4>
            <a href="#footer">Shipping</a>
            <a href="#footer">Returns</a>
            <a href="#footer">Help Center</a>
          </div>
        </div>

        <div className="footer-bottom" id="footer">
          <p>© 2026 MATI. All rights reserved.</p>
          <p>Designed for modern living.</p>
        </div>
      </footer>
    </main>
  );
}
