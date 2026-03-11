function ReactSection({ topic }) {
  if (topic === "intro") {
    return (
      <div>
        <h1>React Introduction</h1>
        <p>React is a JavaScript library for building user interfaces.</p>
      </div>
    );
  }

  if (topic === "components") {
    return (
      <div>
        <h1>React Components</h1>
        <p>Components are reusable pieces of UI.</p>
      </div>
    );
  }

  if (topic === "hooks") {
    return (
      <div>
        <h1>React Hooks</h1>
        <p>Hooks allow functional components to use state and lifecycle.</p>
      </div>
    );
  }

  if (topic === "state") {
    return (
      <div>
        <h1>React State</h1>
        <p>State allows components to store and update data.</p>
      </div>
    );
  }

  return null;
}

export default ReactSection;
