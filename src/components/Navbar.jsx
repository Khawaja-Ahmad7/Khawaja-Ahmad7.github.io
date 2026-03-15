import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BrainCircuit } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-content">
        <div className="nav-logo-group">
          <Link to="/">
             <BrainCircuit className="nav-icon" size={28} />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>About</Link>
          <Link to="/experience" className={`nav-item ${location.pathname === "/experience" ? "active" : ""}`}>Experience</Link>
          <Link to="/projects" className={`nav-item ${location.pathname === "/projects" ? "active" : ""}`}>Projects</Link>
          <Link to="/contact" className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link>
          <a href="/Ahmad Bilal Resume.pdf" target="_blank" className="btn-outline-nav">Resume</a>
        </div>
      </div>
    </nav>
  );
}
