"use client";

import { useEffect, useState } from "react";

export default function ProductGallery({ images, productName }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Close the zoom when the user presses Escape.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsZoomOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="product-gallery">
      <div className="product-gallery-main">
        <button
          type="button"
          className="product-image-zoom-trigger"
          onClick={() => setIsZoomOpen(true)}
          aria-label="Zoom product image"
        >
          <img
            src={images[activeImage]}
            alt={`${productName} view ${activeImage + 1}`}
          />

          <span className="zoom-hint">CLICK TO ZOOM +</span>
        </button>
      </div>

      <div className="product-gallery-thumbnails">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            className={activeImage === index ? "thumbnail-active" : ""}
            onClick={() => setActiveImage(index)}
            aria-label={`View image ${index + 1}`}
            aria-pressed={activeImage === index}
          >
            <img src={image} alt="" />
          </button>
        ))}
      </div>

      {isZoomOpen && (
        <div
          className="product-zoom-overlay"
          onClick={() => setIsZoomOpen(false)}
        >
          <button
            type="button"
            className="product-zoom-close"
            onClick={() => setIsZoomOpen(false)}
            aria-label="Close image zoom"
          >
            ×
          </button>

          <img
            src={images[activeImage]}
            alt={`${productName} enlarged view`}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
