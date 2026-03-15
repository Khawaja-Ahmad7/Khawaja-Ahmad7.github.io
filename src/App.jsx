import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Chatbot from "./components/Chatbot";
import NotFound from "./pages/NotFound";

// Component to handle global UI logic (scroll animations, route changes, cursor)
function GlobalEffects() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Re-initialize intersection observer for .reveal elements
    const reveals = document.querySelectorAll(".reveal");
    
    // Reset active classes for page transitions
    reveals.forEach(el => el.classList.remove("active"));
    
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      }, { threshold: 0.1 });

      reveals.forEach((reveal) => observer.observe(reveal));
      
      return () => observer.disconnect();
    }, 100);
  }, [location.pathname]);

  // Mouse trail effect
  useEffect(() => {
    const blob = document.getElementById("blob");
    
    const handleMouseMove = (e) => {
      if (blob) {
        blob.animate({
          left: `${e.clientX}px`,
          top: `${e.clientY}px`
        }, { duration: 3000, fill: "forwards" });
      }
    };
    
    window.addEventListener("pointermove", handleMouseMove);
    return () => window.removeEventListener("pointermove", handleMouseMove);
  }, []);

  return null;
}

function ScrollProgress() {
  const [scrollDown, setScrollDown] = useState(0);
  
  useEffect(() => {
     const onScroll = () => {
        requestAnimationFrame(() => {
          const winScroll = document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (winScroll / height) * 100;
          setScrollDown(scrolled);
        });
     };
     window.addEventListener("scroll", onScroll, { passive: true });
     return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${scrollDown}%` }}></div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <GlobalEffects />
        <ScrollProgress />
        
        <div id="blob"></div>
        <div id="blur"></div>
        <div className="background-grid"></div>
        
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;



