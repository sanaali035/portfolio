function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      
      <h3>Strategy.town</h3>
      <h4>May 2025- June 2025</h4>
      <p>Strategy.town is a full-stack web application developed using React (Typescript) and Node.js, focused on interactive
        gameplay and user-driven features.

        The system include3s RESTful APIs to manage game state, user data, and statistics, along with dynamic frontend 
        components that support real-time updates and seamless navigation. Application logic and API functionality were
        tested using Vitest and Postman to ensure reliability and alignment with defined user requirements.
      </p>

      <h3>AI Hoops!</h3>
      <h4> July 2024 - August 2024</h4>
      <p> AI Hoops is a reinforcement learning project where a Double Deep Q-Network (DDQN) was developed using PyTorch
        to simulate intelligent gameplay in a Atari basketball environment.

        The model was optimized by using low-dimensional RAM inputs insteade of high-dimensional image data, reducing
        training complexity while maintaining performance. Key reinforcement learning techniques such as experience replay
        and epsilon-greedy policies were applied to improve convergence and enable adaptive decision-making.
      </p>
    </section>
  );
}

export default Projects;