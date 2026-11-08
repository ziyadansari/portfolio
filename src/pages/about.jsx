function About() {
  return (
    <section className="inner-page container">
      <div className="row g-4">
        <div className="col-lg-4">
          <p className="eyebrow">A bit of backstory</p>
          <h1 className="page-title">Hello, I’m <em>Ziyad.</em></h1>
          <p className="page-intro">
            A curious builder, a lifelong learner, and someone who likes making
            the internet feel a little more human.
          </p>
          <div className="about-stamp" aria-hidden="true">
            <span>MADE WITH</span>
            <strong>care<br />& curiosity</strong>
            <span>IN INDIA · EST. ALWAYS LEARNING</span>
          </div>
        </div>
        <div className="col-lg-7 offset-lg-1">
          <div className="about-story">
            <p>
              I’m an aspiring frontend developer who enjoys turning ideas into
              clear, useful web experiences. I work with HTML, CSS, JavaScript,
              and React, and I’m always finding something new to learn along the way.
            </p>
            <p>
              I completed a B.Tech in Computer Science and Engineering from
              Dr. A.P.J. Abdul Kalam Technical University, graduating with a
              CGPA of 7.45. I’m currently pursuing an MBA in Information Technology
              at the same university.
            </p>
            <p>
              Away from the screen, you’ll find me listening to music, travelling,
              or discovering somewhere new. I bring that same curiosity to the
              things I build.
            </p>
          </div>
          <div className="about-divider" />
          <div className="row gy-4">
            <div className="col-sm-6">
              <span className="detail-label">THE STUDY NOTES</span>
              <h2 className="detail-title">Learning, always.</h2>
              <p className="detail-copy">
                B.Tech, Computer Science &amp; Engineering<br />
                MBA, Information Technology · in progress
              </p>
            </div>
            <div className="col-sm-6">
              <span className="detail-label">SAY HELLO</span>
              <h2 className="detail-title">I’m easy to find.</h2>
              <p className="detail-copy">
                <a href="tel:+917037941256">+91 70379 41256</a><br />
                <a href="https://www.instagram.com/ziyadansari001/" target="_blank" rel="noreferrer">
                  Instagram ↗
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
