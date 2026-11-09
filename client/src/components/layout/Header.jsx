import Link from "next/link";

export default function Header({ cartCount }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          MATI<span>.</span>
        </Link>

        <nav className="main-nav">
          <a href="#categories">Categories</a>
          <a href="#new-arrivals">New Arrivals</a>
          <a href="#philosophy">Our Philosophy</a>
          <a href="#fitting-room">Virtual Fitting</a>
        </nav>

        <div className="header-actions">
          <button className="search-button" type="button">
            Search
          </button>

          <Link href="/cart" className="bag-button">
            Bag ({cartCount})
          </Link>
        </div>
      </div>
    </header>
  );
}
