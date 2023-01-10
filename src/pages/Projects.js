import React from "react";
import project from "../images/project-1.jpeg";

function Projects() {
  return (
    <>
      <header class="projects-hero">
        {/* <!-- section title --> */}
        <div class="section-title">
          <h1>my projects</h1>
          <div class="underline"></div>
        </div>
      </header>
      <section class="section">
        {/* <!-- end of section title --> */}
        <div class="section-center projects-page-center">
          {/* <!-- single project --> */}
          <article class="single-project">
            <div class="project-container">
              <img src={project} alt="single project" />
              <a href="https://www.johnsmilga.com" class="project-icon">
                <i class="fas fa-home"></i>
              </a>
            </div>
            <div class="project-details">
              <h4>project name</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                placeat dicta eveniet similique excepturi magni quisquam
                sapiente delectus sunt quam.
              </p>
              <div class="project-footer">
                <span>
                  <i class="fab fa-github"></i>
                </span>
                <a href="https://github.com">source code</a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Projects;
