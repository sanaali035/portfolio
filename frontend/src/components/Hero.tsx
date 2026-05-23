function Hero() {
  return (
    <section className="hero-section" id="profile">

      <div className="hero-main">

        <div className="hero-photo-card">
          <img
            src="/profpic.png"
            alt="Sana Ali"
            className="profile-pic"
          />
        </div>

        <div className="hero-content">
          <h1>Sana Ali</h1>
          <h3>(She/Her)</h3>

          <h4>
            Software Engineering • AI/ML • Full-Stack Development
          </h4>

          <p>
            Hi! I’m interested in building software that feels useful and intentional. 
            My work blends engineering, automation, and problem solving across 
            full-stack and applied AI projects.
          </p>

          <div className="hero-buttons">
            <a href="/Sana_Ali_2026.pdf" className="hero-btn">Resume</a>

            <a
              href="https://github.com/sanaali035"
              className="hero-btn"
            >
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/sanasaharali"
              className="hero-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      <div className="tech-stack-row">
        <a href="#" className="tech-pill">Python</a>
        <a href="#" className="tech-pill">Java</a>
        <a href="#" className="tech-pill">JavaScript</a>
        <a href="#" className="tech-pill">React</a>
        <a href="#" className="tech-pill">Flask</a>
        <a href="#" className="tech-pill">SQL</a>
        <a href="#" className="tech-pill">Node.js</a>
        <a href="#" className="tech-pill">Git</a>
        <a href="#" className="tech-pill">Postman</a>
      </div>

    </section>
  );
}

export default Hero;