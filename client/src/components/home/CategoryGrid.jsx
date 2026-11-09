import { categories } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <section className="categories-section" id="categories">
      <div className="section-heading">
        <div>
          <span className="section-label">EXPLORE MATI</span>
          <h2>Shop by category</h2>
        </div>

        <p>
          Essential pieces. Thoughtful details. A collection designed to last.
        </p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <a
            href={`/collections/${category.path}`}
            className="category-card"
            key={category.id}
          >
            <div className="category-image">
              <img src={category.image} alt={category.name} />
            </div>

            <div className="category-info">
              <div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>

              <span className="category-arrow">↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
