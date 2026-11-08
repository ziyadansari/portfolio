import { Link } from "react-router-dom";

function Projects() {

  const projects = [
    {
      title: "Foodie Food Ordering Website",
      description:
       "A responsive food ordering website built using HTML, CSS, and JavaScript, featuring dynamic food cards, add-to-cart functionality, quantity management, real-time price calculation, and a mobile-friendly shopping cart.",
       tech: "HTML • CSS • JavaScript",
       link: "/projects/foodie"
},
    {
      title: "Grazitti AI Website Clone",
      description:
        "A responsive recreation of Grazitti Interactive’s Artificial Intelligence Solutions website using HTML, CSS, and Bootstrap, focusing on modern UI design, responsive layouts, and a user-friendly experience.",
      tech: "HTML • Bootstrap • CSS",
      link: "/projects/grazzity"
    },

    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website built with React to showcase my skills, projects, achievements, and frontend development journey, featuring modern UI design,  and an engaging user experience.",
      tech: "React • React Router • CSS  ",
      link: "/projects/portfolio"
    },

    {
      title: "Positivus Website Clone",
      description:
        "A responsive recreation of the Positivus website built using HTML, CSS, and Bootstrap, focusing on reusable layouts, modern UI design, and responsive web development.",
      tech: "HTML  • CSS • Bootstrap",
      link: "/projects/positivus"
    }
  ];

  return (
    <section className="projects-section">

      <div className="section-heading">

        <p>My Work</p>

        <h1>Projects</h1>

        <span>
          Some of the projects I have built using modern web technologies.
        </span>

      </div>


      <div className="projects-container">

        {projects.map((project) => (

          <div className="project-card" key={project.title}>

            <div className="project-image">
              Project
            </div>


            <div className="project-content">

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <Link to={project.link}>
                View Project →
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;