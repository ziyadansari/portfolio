
function About() {
  return (
    <section className="about-section">

      <div className="section-heading">
        <p>About Me</p>
        <h1>Get To Know Me</h1>
        <span>
          A little more about my education, interests and background.
        </span>
      </div>

      <div className="about-container">

        {/* About Text */}
        <div className="about-content">

          <h2>Hello, I'm Mohd Ziyad</h2>

          <p>
            I am a passionate learner and aspiring Frontend Developer
            who enjoys building modern and responsive web applications
            using React and JavaScript.
          </p>

          <p>
            I have completed my B.Tech in Computer Science and Engineering
            with a CGPA of 7.45 from Dr. A.P.J. Abdul Kalam Technical
            University (AKTU).
          </p>

          <p>
            Currently, I am pursuing an MBA in IT from Dr. A.P.J. Abdul
            Kalam Technical University (AKTU), where I am developing my
            technical and management skills.
          </p>

          <p>
            Apart from technology, I love listening to music and travelling.
            I enjoy exploring new places and learning new things.
          </p>

        </div>

        {/* Education and Details */}
        <div className="about-details">

          <div className="detail-card">
            <h3>Education</h3>
            <p>
              <strong>B.Tech - Computer Science & Engineering</strong>
            </p>
            <span>CGPA: 7.45 | AKTU</span>
          </div>

          <div className="detail-card">
            <h3>Currently Pursuing</h3>
            <p>
              <strong>MBA - Information Technology</strong>
            </p>
            <span>
              Dr. A.P.J. Abdul Kalam Technical University
            </span>
          </div>

       
        <div className="detail-card">
         <h3>Interests & Hobbies</h3>
          <p>Learning New Skills</p>
          <p>Building Web Applications</p>
          <p> Continuous Learning & Self-Improvement</p>
           <p>Travelling & Exploring New Places</p>

        </div>


          {/* Contact */}
          <div className="detail-card">
            <h3>Contact Me</h3>

            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+917037941256">
                +91 7037941256
              </a>
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:ziyadansari91@gmail.com">
                ziyadansari91@gmail.com
              </a>
            </p>

            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/ziyadansari"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/ziyadansari
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
