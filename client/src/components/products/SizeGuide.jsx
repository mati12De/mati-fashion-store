"use client";

import { useState } from "react";

const sizeChart = [
  { size: "S", min: 86, max: 91 },
  { size: "M", min: 92, max: 97 },
  { size: "L", min: 98, max: 103 },
  { size: "XL", min: 104, max: 109 },
];

export default function SizeGuide({ onClose }) {
  const [chest, setChest] = useState("");
  const [recommendedSize, setRecommendedSize] = useState("");

  function handleRecommendation() {
    const measurement = Number(chest);

    if (!chest || measurement <= 0) {
      setRecommendedSize("Please enter a valid measurement.");
      return;
    }

    const match = sizeChart.find(
      (item) => measurement >= item.min && measurement <= item.max,
    );

    if (match) {
      setRecommendedSize(`We recommend size ${match.size}.`);
    } else {
      setRecommendedSize("Your measurement is outside our current size range.");
    }
  }

  return (
    <div className="size-guide-overlay" onClick={onClose}>
      <div
        className="size-guide-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="size-guide-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="size-guide-header">
          <div>
            <span className="product-category">MATI FIT GUIDE</span>
            <h2 id="size-guide-title">Find Your Size</h2>
          </div>

          <button
            type="button"
            className="size-guide-close"
            onClick={onClose}
            aria-label="Close size guide"
          >
            ×
          </button>
        </div>

        <p className="size-guide-description">
          Enter your chest measurement to find your suggested size. All
          measurements are in centimeters.
        </p>

        <div className="size-chart-wrapper">
          <table className="size-chart">
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest (cm)</th>
              </tr>
            </thead>

            <tbody>
              {sizeChart.map((item) => (
                <tr key={item.size}>
                  <td>{item.size}</td>
                  <td>
                    {item.min} – {item.max}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="size-recommendation">
          <label htmlFor="chest-measurement">Your chest measurement (cm)</label>

          <input
            id="chest-measurement"
            type="number"
            min="1"
            placeholder="Example: 96"
            value={chest}
            onChange={(event) => {
              setChest(event.target.value);
              setRecommendedSize("");
            }}
          />

          <button
            type="button"
            className="size-recommend-button"
            onClick={handleRecommendation}
          >
            FIND MY SIZE
          </button>

          {recommendedSize && (
            <p className="size-recommendation-result" role="status">
              {recommendedSize}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
