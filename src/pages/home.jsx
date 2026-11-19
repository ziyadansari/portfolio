import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hi, I'm</p>

        <h1>Ziyad Ansari</h1>

        <h2>Frontend Developer</h2>

        <p className="hero-description">
          I build modern, responsive and interactive web applications
          using JavaScript and React. I enjoy turning ideas into
          clean and user-friendly digital experiences.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/projects")}
          >
            View Projects
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/about")}
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="hero-image">
        <div className="profile-circle">ZA</div>
      </div>
    </section>
  );
}

export default Home;