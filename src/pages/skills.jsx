const toolGroups = [
  {
    number: "01",
    title: "The building blocks",
    description: "The fundamentals I use to shape accessible, dependable pages.",
    tools: ["HTML", "CSS", "JavaScript"],
    className: "tool-card-olive",
  },
  {
    number: "02",
    title: "The interface",
    description: "Tools for bringing interactive ideas to life on the web.",
    tools: ["React", "React Router", "Bootstrap"],
    className: "tool-card-clay",
  },
  {
    number: "03",
    title: "The finishing touches",
    description: "Responsive layouts, reusable components, and a close eye for detail.",
    tools: ["Responsive design", "CSS layouts", "UI polish"],
    className: "tool-card-ink",
  },
];

function Skills() {
  return (
    <section className="inner-page container">
      <div className="row align-items-end gy-3 page-heading">
        <div className="col-lg-8">
          <p className="eyebrow">What’s in my toolkit</p>
          <h1 className="page-title">A few tools.<br /><em>A lot to explore.</em></h1>
        </div>
        <div className="col-lg-4">
          <p className="page-intro">
            I like understanding the basics, choosing the right tool for the job,
            and staying curious about what’s next.
          </p>
        </div>
      </div>
      <div className="row g-3">
        {toolGroups.map((group) => (
          <div className="col-md-6 col-lg-4" key={group.number}>
            <article className={`tool-card ${group.className}`}>
              <span className="tool-number">{group.number} / 03</span>
              <div>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
              </div>
              <ul className="tool-list" aria-label={`${group.title} technologies`}>
                {group.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </article>
          </div>
        ))}
      </div>
      <div className="learning-note">
        <span className="learning-star" aria-hidden="true">✳</span>
        <p><strong>Always in progress.</strong> I’m currently building my confidence with React and exploring how small design choices make the web easier to use.</p>
      </div>
    </section>
  );
}

export default Skills;
