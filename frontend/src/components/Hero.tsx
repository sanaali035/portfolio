function Hero() {
  return (

    <section className="hero-section" id="profile">
      <div className="hero-photo-card">
        <img src="/profpic.png" alt="Sana Ali" className="profile-pic" />
      </div>

      <div className="hero-content">
        <h1>Sana Ali</h1>
        <h3>Software Engineering • AI/ML • Full-Stack Development</h3>

        <p>
        Hi! I’m interested in building software that feels intelligent, 
        useful, and intentional. My work blends engineering, automation, and problem 
        solving across full-stack and applied AI projects.
      </p>

      <div className="hero-buttons">
        <a href="#" className="hero-btn">Resume</a>
        <a href="https://github.com/sanaali035" className="hero-btn">Github</a>
        <a href="https://www.linkedin.com/in/sanasaharali" className="hero-btn">LinkedIn</a>
      </div>
      
    </div>
    </section>
    ); 
  }

export default Hero;
