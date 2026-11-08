const projects = [
  {
    number: "01",
    category: "INTERACTIVE FRONTEND",
    title: "Foodie",
    subtitle: "Good food, one click closer.",
    description:
      "A food ordering experience with browsable food cards, a working cart, quantity controls, and a live price total.",
    stack: ["HTML", "CSS", "JavaScript"],
    visual: "project-poster-food",
    symbol: "F.",
  },
  {
    number: "02",
    category: "RESPONSIVE WEBSITE",
    title: "Grazitti AI",
    subtitle: "A fresh look at AI solutions.",
    description:
      "A responsive recreation of Grazitti Interactive’s AI solutions website, with considered layouts and clear visual hierarchy.",
    stack: ["HTML", "CSS", "Bootstrap"],
    visual: "project-poster-grazitti",
    symbol: "AI",
  },
  {
    number: "03",
    category: "REACT APPLICATION",
    title: "My portfolio",
    subtitle: "A home for the work in progress.",
    description:
      "A multi-page React portfolio bringing together my projects, skills, and background in one approachable place.",
    stack: ["React", "React Router", "CSS"],
    visual: "project-poster-portfolio",
    symbol: "ZA",
  },
  {
    number: "04",
    category: "RESPONSIVE WEBSITE",
    title: "Positivus",
    subtitle: "A brighter kind of agency site.",
    description:
      "A responsive recreation of the Positivus website, built around reusable page layouts and a clean, modern feel.",
    stack: ["HTML", "CSS", "Bootstrap"],
    visual: "project-poster-positivus",
    symbol: "P+",
  },
];

function Projects() {
  return (
    <section className="inner-page container">
      <div className="row align-items-end gy-3 page-heading">
        <div className="col-lg-8">
          <p className="eyebrow">The workbench</p>
          <h1 className="page-title">Made with care.<br /><em>Still getting better.</em></h1>
        </div>
        <div className="col-lg-4">
          <p className="page-intro">
            A collection of practice, experiments, and ideas I’ve brought to life
            on the web.
          </p>
        </div>
      </div>
      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-6" key={project.number}>
            <article className="project-entry">
              <div className={`project-poster ${project.visual}`} aria-hidden="true">
                <span className="poster-number">{project.number} / 04</span>
                <span className="poster-symbol">{project.symbol}</span>
                <span className="poster-title">{project.title}</span>
                <span className="poster-caption">{project.subtitle}</span>
              </div>
              <div className="project-entry-info">
                <div className="d-flex justify-content-between align-items-baseline gap-3">
                  <h2>{project.title}</h2>
                  <span className="project-category">{project.category}</span>
                </div>
                <p>{project.description}</p>
                <ul className="project-tags" aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </article>
          </div>
        ))}
      </div>
      <p className="projects-footnote"><span aria-hidden="true">✳</span> Each project taught me something worth keeping.</p>
    </section>
  );
}

export default Projects;
