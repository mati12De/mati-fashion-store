/* eslint-disable @next/next/no-html-link-for-pages */
const products = [
  {
    id: 1,
    name: "Structura Bomber",
    category: "Outerwear",
    price: "ETB 8,500",
    tag: "NEW ARRIVAL",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900",
  },
  {
    id: 2,
    name: "Essential Oversized Tee",
    category: "Essentials",
    price: "ETB 2,200",
    tag: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900",
  },
  {
    id: 3,
    name: "Architect Trouser",
    category: "Bottoms",
    price: "ETB 4,800",
    tag: "",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=900",
  },
];

const categories = [
  {
    id: 1,
    name: "Tailored Outerwear",
    description: "Cashmere coats & technical parkas",
    path: "outerwear",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGACN0rQTuvjgD-EdjDWHvxnAoS28p9un7i0kAI01ctGqL7riVsJKgx_ifZbq1vZKb5vHPglRTXWHY2sqjytAAQWLAIlYaZysS-kREK_Wzv5v4w8dcKZ4JArHhaFT5EaiQtLxQv_pOE3ovi03RF6c6VPdQVzY_zEmXsFejvV53DuzxwS3ItrGxHLXpEN3EpWXuzFEFEX3k8XXHIsiSxIQwB3NaR8QAXT_-vbEp4pU",
  },
  {
    id: 2,
    name: "Modern Tailoring",
    description: "Unconstructed jackets & pleats",
    path: "tailoring",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtkwBE25alGM-IT7RvYt2J5JmMZbI8G-xJEINB0TlLS41hcglihe92nasAxN9gwTVYBhm6h9RGj6uN6gYkqRAjuphIn90t0DouVHrifjSh014wrjn9c-gk55mwLLDlr57D4bpSOa3OHc9xhqOvjhd9BIPGEkZNPM_sMEulrscfP7-r8OMaTW-h1kJEVpB4xmtS-PEkE4SxwnFSd553EtWK6pXlxHgEpR1eXpyifaQ",
  },
  {
    id: 3,
    name: "Elevated Essentials",
    description: "Supima jerseys & waffle knits",
    path: "essentials",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjT6nYDxPrPI1pet0Iv1LSq5BpGhyRYw5_lAjAUtLtzf4x2grSAhGPRqPtaQRzAql57MaJJN62pC6f6aeNr5L0Mz4TH707A7ABzbeAaq84uPjRbAB5jljsPW65Vov8wIo56HDQCzHBp4dXZZXAWXOyfu2fc91cLYpepxzyE1ATNXe4m_9sM4AFm6Wb12-k9NkeMHng4ZhOD-cmnKP3REpKe2yhIBQ3lEqTaPe3mnU",
  },
  {
    id: 4,
    name: "Architectural Footwear",
    description: "Lug derbies & Chelsea boots",
    path: "footwear",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFlnnl729Dp8ahbRIW_q1rvPrO4BhARiu00NSDGIe_DiWKHbXr-SuC54FeCs93QZeSxIs0a940jgllNwApDYgV_XduhlhFmcrtJMVS1arFZjH8qfCJNnp9PykUsHDDjxY0I6yqUfRiiwer7nJGxUW2dGio02qwhxUGYr-rImW3dZXSxds2CJbasuO8LmUEkaTZbSPUAU5Qr63_vJy-9uP35tq2UO5ORJMj4j389os",
  },
];

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="site-header">
        <a href="/" className="logo">
          MATI<span>.</span>
        </a>

        <nav className="navigation">
          <a href="#categories">Categories</a>
          <a href="#collection">New arrivals</a>
          <a href="#story">Our philosophy</a>
          <a href="#fitting-room">Virtual fitting</a>
        </nav>

        <div className="header-actions">
          <a href="#collection">Search</a>
          <a href="#collection">Bag (0)</a>
        </div>
      </header>

      {/* STITCH HERO */}
      <section className="stitch-hero">
        <div
          className="stitch-hero-image"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiMNZP8pEtUpY7XmjBC84Y0Lvaeaz2G2H4NRTGiV59Dib7y4Gkq8dDasXXVLAbcvTcaaT5HOursz46GVJACG5OeM4ZjeHfDvkjuu5FcoDTRJ9pgX4ns2abCh6iDMKiFdNMjxZKGCjv9bCm66d1gVXPdJxU8fS5OocAuqmufvACZ-aPXxFEDJX8f41tSvPJnolFAe2q9Wpk48lcS_ZM8UAKRP3jEhcTbMRq2KMPXLc")',
          }}
        />

        <div className="stitch-hero-overlay" />

        <div className="stitch-hero-content">
          <span className="stitch-hero-badge">
            <span className="status-dot" />
            AI VIRTUAL TRY-ON 2.0
            <span className="badge-divider">|</span>
            Virtual Drape Engine
          </span>

          <h1>Try it on before it ships.</h1>

          <p>
            Experience a new way to shop menswear. Discover your style and
            explore how every piece looks before making your choice.
          </p>

          <div className="stitch-hero-actions">
            <a href="#fitting-room" className="stitch-primary-button">
              TRY ON NOW <span>↗</span>
            </a>

            <a href="#categories" className="stitch-secondary-button">
              EXPLORE COLLECTION <span>→</span>
            </a>
          </div>

          <div className="stitch-hero-stats">
            <span>✦ Virtual fitting experience</span>
            <span>✦ Discover your perfect style</span>
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="category-section" id="categories">
        <div className="category-heading">
          <div>
            <span className="eyebrow">EXPLORE THE MATI COLLECTION</span>
            <h2>Shop by category.</h2>
          </div>

          <span className="category-count">01 — 04</span>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <a href={`#collection`} className="category-card" key={category.id}>
              <div
                className="category-image"
                style={{
                  backgroundImage: `url("${category.image}")`,
                }}
                role="img"
                aria-label={category.name}
              />

              <div className="category-overlay" />

              <div className="category-content">
                <span className="category-number">0{index + 1} / CATEGORY</span>

                <h3>{category.name}</h3>

                <p>{category.description}</p>

                <span className="category-link">EXPLORE CATEGORY ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="collection-section" id="collection">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE LATEST COLLECTION</span>
            <h2>New Arrivals.</h2>
            <p className="collection-description">
              Engineered silhouettes, contemporary essentials, and carefully
              selected menswear.
            </p>
          </div>

          <a href="#collection" className="text-link">
            VIEW ALL PRODUCTS ↗
          </a>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div
                className="product-image"
                style={{
                  backgroundImage: `url("${product.image}")`,
                }}
              >
                {product.tag && (
                  <span className="product-tag">{product.tag}</span>
                )}

                <button
                  type="button"
                  className="product-add"
                  aria-label={`Quick add ${product.name}`}
                >
                  QUICK ADD +
                </button>
              </div>

              <div className="product-details">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>

                <span>{product.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MATI PHILOSOPHY */}
      <section className="story-section" id="story">
        <span className="eyebrow">THE MATI PHILOSOPHY</span>

        <h2>
          Less noise.
          <br />
          <span>More presence.</span>
        </h2>

        <p>
          We believe great style comes from intentional choices. Every piece
          should have a purpose, every detail should matter.
        </p>
      </section>

      {/* VIRTUAL FITTING ROOM */}
      <section className="fitting-section" id="fitting-room">
        <div>
          <span className="eyebrow">A NEW WAY TO EXPERIENCE FASHION</span>

          <h2>
            Your style.
            <br />
            <span>Your fit.</span>
          </h2>

          <p>
            Experience the future of shopping. Preview selected pieces on your
            digital avatar before making your choice.
          </p>

          <span className="coming-soon">
            VIRTUAL FITTING ROOM — COMING SOON
          </span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <a href="/" className="logo">
          MATI<span>.</span>
        </a>
        <p>Designed for individuality. Built for everyday.</p>
        <span>© 2026 MATI STUDIO</span>
      </footer>
    </main>
  );
}
