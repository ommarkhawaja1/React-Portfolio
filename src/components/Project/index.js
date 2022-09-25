import React from "react";

function Project() {
  const projects = [
    {
      title: "Coding Quiz",
      technologies: "HTML, CSS, Javascript",
      imageUrl: "../assets/Coding-Quiz.jpg",
      app: "https://ommarkhawaja1.github.io/Coding-Quiz/",
      github: "https://github.com/ommarkhawaja1/Coding-Quiz",
    },
    {
      title: "DevNet",
      technologies: "React, GraphQL, Node.js, Express.js, MongoDB, Mongoose ODM, JWT",
      imageUrl: "../assets/DevNet.jpg",
      app: "https://devnetsocial.herokuapp.com/",
      github: "https://github.com/grayad/DevNet",
    },
    {
      title: "Daily Task Schedule",
      technologies: "HTML, CSS, Javascript",
      imageUrl: "../assets/Daily-Task-Schedule.jpg",
      app: "https://ommarkhawaja1.github.io/Daily-Schedule/",
      github: "https://github.com/ommarkhawaja1/Daily-Schedule",
    },
    {
      title: "Weather Dashboard",
      technologies: "HTML, CSS, Javascript",
      imageUrl: "../assets/Weather-Dashboard.jog",
      app: "https://ommarkhawaja1.github.io/Weather-Dashboard/",
      github: "https://github.com/ommarkhawaja1/Weather-Dashboard",
    },
    {
      title: "Note Taker",
      technologies: "HTML, CSS, Javascript",
      imageUrl: "../assets/Daily-Task-Schedule.jpg",
      app: "https://ommarkhawaja1.github.io/Daily-Schedule/",
      github: "https://github.com/ommarkhawaja1/Daily-Schedule",
    },
    {
      title: "Budget Tracker",
      technologies: "Indexed DB, Service Worker, Manifest, Node, Express.js, Mongo DB",
      imageUrl: "../assets/Budget-Tracker.jpg",
      app: "https://floating-earth-11863.herokuapp.com/",
      github: "https://github.com/ommarkhawaja1/Budget-Tracker",
    },

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
