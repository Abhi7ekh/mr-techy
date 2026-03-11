import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home">
      <h1 className="home-title">MR.TECHY</h1>

      <p className="home-desc">
        Welcome to MR.TECHY — a platform designed to help developers learn
        modern technologies like React, Node.js, MySQL, and more. Explore
        concepts, architecture, and practical knowledge to build powerful
        systems.
      </p>

      <div className="home-actions">
        <Link className="home-card" to="/learn/react/introduction">
          <div className="home-card-title">Web Development</div>
          <div className="home-card-desc">
            Learn React, Node.js, MySQL, CSS and build real projects.
          </div>
          <div className="home-card-cta">Open →</div>
        </Link>

        <Link className="home-card" to="/aptitude/quantitative/introduction">
          <div className="home-card-title">Aptitude</div>
          <div className="home-card-desc">
            Quantitative, logical reasoning, verbal ability, puzzles.
          </div>
          <div className="home-card-cta">Open →</div>
        </Link>
      </div>

      <p className="dev-note">🚧 Under Development</p>
    </div>
  );
}

export default HomePage;
