"use client";

import { useState } from "react";

const informationSections = [
  {
    id: "description",
    title: "Product Description",
    content: "Discover the design, details and character of this piece.",
  },
  {
    id: "materials",
    title: "Materials & Care",
    content:
      "Material composition and care instructions will be confirmed for this product.",
  },
  {
    id: "fit",
    title: "Fit & Sizing",
    content:
      "Choose your preferred size using our size guide before adding this item to your bag.",
  },
  {
    id: "shipping",
    title: "Shipping & Returns",
    content:
      "Shipping and return information will be provided during checkout.",
  },
];

export default function ProductInformation({ product }) {
  const [openSection, setOpenSection] = useState("description");

  return (
    <section className="product-information">
      <h2>Product Information</h2>

      <div className="information-accordion">
        {informationSections.map((section) => {
          const isOpen = openSection === section.id;

          return (
            <div className="information-item" key={section.id}>
              <button
                type="button"
                className="information-trigger"
                onClick={() => setOpenSection(isOpen ? null : section.id)}
                aria-expanded={isOpen}
              >
                <span>{section.title}</span>
                <span className="information-icon">{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div className="information-content">
                  {section.id === "description"
                    ? product.description
                    : section.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
