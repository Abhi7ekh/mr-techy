function HomePage({ enterSite }) {
  return (
    <div className="home">
      <h1 className="home-title">MR.TECHY</h1>

      <p className="home-desc">
        Welcome to MR.TECHY — a platform designed to help developers learn
        modern technologies like React, Node.js, MySQL, and more. Explore
        concepts, architecture, and practical knowledge to build powerful
        systems.
      </p>

      <button className="enter-btn" onClick={enterSite}>
        Next
      </button>

      <p className="dev-note">🚧 Under Development</p>
    </div>
  );
}

export default HomePage;
