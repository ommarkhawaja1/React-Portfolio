import React from "react";

function Project() {
  const projects = [
    {
      title: "Coding-Quiz",
      technologies: "HTML/CSS/JS",
      imageUrl: "./assets/Timed-Quiz.jpg",
      app: "https://ommarkhawaja1.github.io/Coding-Quiz/",
      github: "https://github.com/ommarkhawaja1/Coding-Quiz",
    }
  ];
  return (
    <section>
      <div className="card-deck d-flex flex-row flex-wrap justify-content-center p-3">
        {projects.map((project) => (
          <div className="card m-2" key={project.title}>
            <img
              src={project.imageUrl}
              class="card-img"
              alt="Application Screenshot"
            ></img>
            <div class="card-body">
              <h5 class="card-title">{project.title}</h5>
              <p class="card-text">Built With: {project.technologies}</p>
            </div>
            <div class="card-footer d-flex justify-content-center align-items-center">
              <a href={project.app} class="btn">
                Application
              </a>
              <a href={project.github} class="btn">
                Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
