function Skills() {
  const skills = [
    {
      name: "HTML",
      description: "Creating clean and semantic web pages.",
      icon: "🌐"
    },
    {
      name: "CSS",
      description: "Building responsive and modern interfaces.",
      icon: "🎨"
    },
    {
      name: "JavaScript",
      description: "Adding logic and interactivity to applications.",
      icon: "⚡"
    },
    {
      name: "React",
      description: "Building component-based user interfaces.",
      icon: "⚛️"
    }
  ];

  return (
    <section className="skills-section">

      <div className="section-heading">
        <p>My Skills</p>
        <h1>Technologies I Use</h1>
        <span>
          Tools and technologies I use to build modern web applications.
        </span>
      </div>

      <div className="skills-container">

        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h2>{skill.name}</h2>

            <p>{skill.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;