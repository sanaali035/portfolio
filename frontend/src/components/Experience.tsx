import "./Experience.css"

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="shelf-header">
        <h2>Experience Shelf</h2>
        <div className="shelf-line"></div>
      </div>

      <div className="experience-grid">
        <article className="experience-card">
          <div className="experience-date">July 2024 - August 2024</div>

          <div className="experience-content">
            <h3>Teaching Assistant - Northeastern University</h3>
            <h4>Khoury College of Computer Science • Boston, MA</h4>
            <p>
              Supported course instruction, helped students strengthen technical
              understanding, and assisted with academic programming concepts.
            </p>
          </div>
        </article>

        <article className="experience-card">
          <div className="experience-date">July 2023 - December 2023</div>

          <div className="experience-content">
            <h3>Software Developer & IT Analyst - Harvard Kennedy School</h3>
            <h4>Harvard Kennedy School • Cambridge, MA</h4>
            <p>
              Built internal tools, automated workflows, supported users, and
              improved operational processes across technical systems.
            </p>
          </div>
        </article>

        <article className="experience-card">
          <div className="experience-date">July 2022 - August 2022</div>

          <div className="experience-content">
            <h3>Summer College Intern</h3>
            <h4>
              New York City Department of Citywide Administrative Services
              (DCAS) • NYC
            </h4>
            <p>
              Worked with testing processes, requirements, user workflows, and
              system modernization efforts.
            </p>
          </div>
        </article>

        <article className="experience-card">
          <div className="experience-date">July 2019 - August 2019</div>

          <div className="experience-content">
            <h3>Girls Who Code</h3>
            <h4>Johnson & Johnson • Raritan, NJ</h4>
            <p>
              Participated in a technical learning program focused on coding,
              collaboration, and early software development exposure.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;