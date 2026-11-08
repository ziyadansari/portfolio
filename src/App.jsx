import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/home";
import Skills from "./pages/skills";
import Navbar from "./components/navbar";
import Projects from "./pages/projects";
import About from "./pages/about";

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2">
          <span>Made with care by Ziyad Ansari.</span>
          <a href="tel:+917037941256">Get in touch <span aria-hidden="true">↗</span></a>
        </div>
      </footer>
    </>
  );
}

export default App;