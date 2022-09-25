import React from "react";

function Project() {
  const projects = [
    {
      title: "Coding-Quiz",
      technologies: "HTML/CSS/JS",
      imageUrl: "../assets/Coding-Quiz.jpg",
      app: "https://ommarkhawaja1.github.io/Coding-Quiz/",
      github: "https://github.com/ommarkhawaja1/Coding-Quiz",
    },
    {
      title: "DevNet",
      technologies: "",
      imageUrl: "../assets/DevNet.jpg",
      app: "",
      github: "https://github.com/grayad/DevNet",
    },
    {
      title: "",
      technologies: "",
      imageUrl: "",
      app: "",
      github: "",
    }

  ];
  return (
    <section>
      <div className="card-deck d-flex flex-row flex-wrap justify-content-center p-3">
        {projects.map((project) => (
          <div className="card m-2" key={project.title}>
            <img
              src={project.imageUrl}
              className="card-img"
              alt="Application Screenshot"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">Built With: {project.technologies}</p>
            </div>
            <div className="card-footer d-flex justify-content-center align-items-center">
              <a href={project.app} className="btn">
                Application
              </a>
              <a href={project.github} className="btn">
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
