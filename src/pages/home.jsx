import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="home-hero container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-7">
            <p className="eyebrow"><span className="status-dot" /> A frontend developer in India</p>
            <h1 className="hero-title">
              Thoughtful websites,
              <span> made for real people.</span>
            </h1>
            <p className="hero-copy">
              I’m Ziyad — a developer learning by making. I turn ideas into
              welcoming, responsive web experiences with a little care in every detail.
            </p>
            <div className="d-flex flex-wrap gap-3 align-items-center">
              <Link className="button button-dark" to="/projects">
                Explore my work <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" to="/about">A little about me <span aria-hidden="true">→</span></Link>
            </div>
            <div className="hero-footnote">
              <span>Currently learning</span>
              <strong>React · UI craft · the little details</strong>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="notebook-art" aria-label="A playful paper illustration of a notebook and a cup of tea">
              <div className="art-sun" />
              <div className="art-note">
                <span className="note-label">FIELD NOTE&nbsp; 01</span>
                <span className="note-scribble">Ideas<br />into<br /><i>interfaces.</i></span>
                <span className="note-mark">✳</span>
              </div>
              <div className="art-cup"><span /></div>
              <span className="art-caption">a work in progress, always</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-work">
        <div className="container">
          <div className="section-topline">
            <span className="eyebrow">A few things I’ve made</span>
            <span className="section-index">01 — 02</span>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <Link className="mini-project mini-project-food" to="/projects">
                <span className="mini-project-number">01 / INTERFACE</span>
                <span className="mini-project-name">Foodie<span aria-hidden="true">↗</span></span>
                <span className="mini-project-meta">A little less scrolling. A lot more appetite.</span>
              </Link>
            </div>
            <div className="col-md-6">
              <Link className="mini-project mini-project-positivus" to="/projects">
                <span className="mini-project-number">02 / WEB DESIGN</span>
                <span className="mini-project-name">Positivus<span aria-hidden="true">↗</span></span>
                <span className="mini-project-meta">A fresh take on a digital agency site.</span>
              </Link>
            </div>
          </div>
          <div className="work-more">
            <Link className="text-link" to="/projects">See all selected work <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
