import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Skills from "./pages/skills";
import Navbar from "./components/navbar";
import Projects from "./pages/projects";
import  About from "./pages/about";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/projects" element={<Projects />} />
        
        <Route path="/about" element={<About />} />

        <Route path="/" element={<Home />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/about" element={< About />} />

      </Routes>
    </>
  );
}

export default App;