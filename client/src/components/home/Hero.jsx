export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-label">THE NEW STANDARD OF DRESSING</span>

        <h1>
          Try it on before it
          <br />
          <span>ships.</span>
        </h1>

        <p>
          Discover a new way to experience fashion. Explore carefully selected
          pieces and see how they look before making them yours.
        </p>

        <div className="hero-actions">
          <a href="#new-arrivals" className="primary-button">
            Explore Collection
          </a>

          <a href="#fitting-room" className="secondary-button">
            Discover Virtual Fitting
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>01</strong>
            <span>Designed with purpose</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Made for modern living</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Experience the future</span>
          </div>
        </div>
      </div>
    </section>
  );
}
