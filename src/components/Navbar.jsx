import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BrainCircuit, Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsLightMode(true);
      document.documentElement.setAttribute("data-theme", "light");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    if (!isLightMode) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-content">
        <div className="nav-logo-group">
          <Link to="/">
             <BrainCircuit className="nav-icon" size={28} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>About</Link>
          <Link to="/experience" className={`nav-item ${location.pathname === "/experience" ? "active" : ""}`}>Experience</Link>
          <Link to="/projects" className={`nav-item ${location.pathname === "/projects" ? "active" : ""}`}>Projects</Link>
          <Link to="/contact" className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link>
          <a href="/Ahmad Bilal Resume.pdf" target="_blank" className="btn-outline-nav">Resume</a>
          
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
}
