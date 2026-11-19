
import { Link } from "react-router-dom";

function Projects() {

  const projects = [
    {
      title: "Foodie Food Ordering Website",
      description:
        "A responsive food ordering website built using HTML, CSS, and JavaScript, featuring dynamic food cards, add-to-cart functionality, quantity management, real-time price calculation, and a mobile-friendly shopping cart.",
      tech: "HTML • CSS • JavaScript",
       link: "https://efeast.vercel.app/"
    },
    {
      title: "Grazitti AI Website Clone",
      description:
        "A responsive recreation of Grazitti Interactive’s Artificial Intelligence Solutions website using HTML, CSS, and Bootstrap, focusing on modern UI design, responsive layouts, and a user-friendly experience.",
      tech: "HTML • Bootstrap • CSS",
       link: "https://grazitti.vercel.app/"
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website built with React to showcase my skills, projects, achievements, and frontend development journey.",
      tech: "React • React Router • CSS",
       link: "https://ziyad007.vercel.app/"
    },

{
  title: "Positivus Website Clone",
  description:
    "A responsive recreation of the Positivus website built using HTML, CSS, and Bootstrap, focusing on reusable layouts, modern UI design, and responsive web development.",
  tech: "HTML • CSS • Bootstrap",
   link: "https://positivus-landing-ashen.vercel.app/"
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

              <div className="project-links">

                <Link to={project.link}  target="_blank">
                  View Details →
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;
