function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="shelf-header">
        <h2>Project Shelf</h2>
        <div className="shelf-line"></div>
      </div>

      <div className="project-grid">
        <article className="project-card">
          <h3>Strategy.town</h3>
          <h4>May 2025 - June 2025</h4>
          <p>
            Strategy.town is a full-stack web application developed using React,
            TypeScript, and Node.js, focused on interactive gameplay and
            user-driven features.
          </p>
          <p>
            The system includes RESTful APIs to manage game state, user data,
            and statistics, along with dynamic frontend components that support
            real-time updates and seamless navigation. Application logic and API
            functionality were tested using Vitest and Postman.
          </p>
        </article>

        <article className="project-card">
          <h3>AI Hoops!</h3>
          <h4>July 2024 - August 2024</h4>
          <p>
            AI Hoops is a reinforcement learning project where a Double Deep
            Q-Network was developed using PyTorch to simulate intelligent
            gameplay in an Atari basketball environment.
          </p>
          <p>
            The model used low-dimensional RAM inputs instead of image data,
            reducing training complexity while maintaining performance. Key RL
            techniques included experience replay and epsilon-greedy policies.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Projects;