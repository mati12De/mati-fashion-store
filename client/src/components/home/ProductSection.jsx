import ProductCard from "./ProductCard";

export default function ProductSection({
  products,
  activeProduct,
  selectedSizes,
  addedProduct,
  setActiveProduct,
  handleSizeSelect,
  handleAddToBag,
}) {
  return (
    <section className="products-section" id="new-arrivals">
      <div className="section-heading">
        <div>
          <span className="section-label">THE LATEST EDIT</span>
          <h2>New arrivals</h2>
        </div>

        <a href="#new-arrivals" className="text-link">
          View all products ↗
        </a>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isActive={activeProduct === product.id}
            selectedSize={selectedSizes[product.id]}
            isAdded={addedProduct === product.id}
            onToggle={() =>
              setActiveProduct(activeProduct === product.id ? null : product.id)
            }
            onSizeSelect={(size) => handleSizeSelect(product.id, size)}
            onAddToBag={() => handleAddToBag(product)}
          />
        ))}
      </div>
    </section>
  );
}
