function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="shelf-header">
        <h2>Project Shelf</h2>
        <div className="shelf-line"></div>
      </div>

      <div className="project-grid">
        <article className="project-card">
          <img
            src="/strategytown.png"
            alt="Strategy Town Crazy 8's multiplayer game"
            className="project-img"
          />

          <div className="project-card-content">
            <h3>Strategy.town</h3>

            <p>
              Strategy.town is a full-stack web application developed using
              React, TypeScript, and Node.js, focused on interactive gameplay
              and user-driven features.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
            </div>
          </div>
        </article>

        <article className="project-card">
          <img
            src="/hoops.png"
            alt="AI Hoops reinforcement learning basketball project"
            className="project-img"
          />

          <div className="project-card-content">
            <h3>AI Hoops!</h3>

            <p>
              AI Hoops is a reinforcement learning project where a Double Deep
              Q-Network was developed using PyTorch to simulate intelligent
              gameplay in an Atari basketball environment.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>PyTorch</span>
              <span>RL</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;