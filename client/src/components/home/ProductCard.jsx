const sizes = ["S", "M", "L", "XL"];

export default function ProductCard({
  product,
  isActive,
  selectedSize,
  isAdded,
  onToggle,
  onSizeSelect,
  onAddToBag,
}) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        {product.tag && <span className="product-tag">{product.tag}</span>}

        <button className="quick-add-button" type="button" onClick={onToggle}>
          {isActive ? "Close" : "Quick Add +"}
        </button>
      </div>

      <div className="product-info">
        <div>
          <p className="product-category">{product.category}</p>
          <h3>{product.name}</h3>
        </div>

        <span className="product-price">
          ETB {product.price.toLocaleString("en-US")}
        </span>
      </div>

      {isActive && (
        <div className="size-selector">
          <p>Select your size</p>

          <div className="size-options">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                className={`size-option ${
                  selectedSize === size ? "selected" : ""
                }`}
                onClick={() => onSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="add-to-bag-button"
            onClick={onAddToBag}
          >
            Add to Bag
          </button>

          {!selectedSize && (
            <p className="size-message">Please select a size first.</p>
          )}
        </div>
      )}

      {isAdded && (
        <p className="added-message">Successfully added to your bag.</p>
      )}
    </article>
  );
}
