import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, ArrowRight, BrainCircuit, Database, Braces, Terminal, Code, DatabaseBackup } from "lucide-react";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Data Scientist | Software Engineer";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero-section reveal">
        <div className="hero-badge"><span className="cursor-dot"></span> Available for opportunities</div>
        <p className="greeting">Hi, my name is</p>
        <h1 className="name">Ahmad Bilal.</h1>
        <h2 className="title typing-text">{typedText}<span className="cursor">|</span></h2>
        
        <p className="bio">
          I am a Data Science student at the Faculty of Computing and Information Technology (FCIT), Punjab University. 
          My expertise spans across machine learning, full-stack software development, and building data-driven applications. 
          I love bridging the gap between complex algorithms and interactive user experiences.
        </p>

        <div className="stats-row">
          <div className="stat-box">
            <Database size={24} className="stat-icon" />
            <h3>Data Science</h3>
            <p>Python, Pandas, SQL</p>
          </div>
          <div className="stat-box">
            <BrainCircuit size={24} className="stat-icon" />
            <h3>AI & ML</h3>
            <p>Scikit-learn, Gradio, LLMs</p>
          </div>
          <div className="stat-box">
            <Braces size={24} className="stat-icon" />
            <h3>Software Dev</h3>
            <p>React, Node.js, Next.js</p>
          </div>
        </div>

        <div className="hero-cta">
          <Link to="/projects" className="btn-primary">View My Work <ArrowRight size={18} /></Link>
          <a href="https://github.com/Khawajaa07" target="_blank" rel="noreferrer" className="btn-social"><Github size={20} /> GitHub</a>
          <a href="https://www.linkedin.com/in/khawaja-ahmad-bilal/" target="_blank" rel="noreferrer" className="btn-social"><Linkedin size={20} /> LinkedIn</a>
        </div>
      </section>

      <section className="projects-section reveal" style={{paddingTop: "50px"}}>
        <h2 className="section-heading">Current Employment & Experience</h2>
        <div className="experience-list">
          <div className="project-card" style={{marginBottom: "20px"}}>
            <h3 className="project-title" style={{marginBottom: "5px"}}>Infrastructure Support</h3>
            <p className="project-desc" style={{color: "var(--green)", marginBottom: "15px"}}>SoulTech Pakistan | Jan 2025 - Present</p>
            <ul className="project-tech" style={{flexDirection: "column", gap: "10px", alignItems: "flex-start"}}>
              <li style={{background: "transparent", padding: 0, color: "var(--slate)"}}>• Diagnosing and resolving a wide range of technical issues across hardware and software systems</li>
              <li style={{background: "transparent", padding: 0, color: "var(--slate)"}}>• Collaborating on the development and maintenance of official business website</li>
              <li style={{background: "transparent", padding: 0, color: "var(--slate)"}}>• Designed and implemented a custom POS system using Python, SQL Server, and Tkinter for a subsidiary business</li>
            </ul>
          </div>
          
          <div className="project-card" style={{marginBottom: "20px"}}>
            <h3 className="project-title" style={{marginBottom: "5px"}}>IT Support & Media Manager</h3>
            <p className="project-desc" style={{color: "var(--green)", marginBottom: "15px"}}>Al-Fazal Hospital | April 2024 - June 2024</p>
            <ul className="project-tech" style={{flexDirection: "column", gap: "10px", alignItems: "flex-start"}}>
              <li style={{background: "transparent", padding: 0, color: "var(--slate)"}}>• Provided comprehensive technical support to hospital staff</li>
              <li style={{background: "transparent", padding: 0, color: "var(--slate)"}}>• Organized and maintained digital patient records and data files securely</li>
            </ul>
          </div>

          <h2 className="section-heading" style={{marginTop: "50px"}}>Education</h2>
          <div className="project-card">
            <h3 className="project-title" style={{marginBottom: "5px"}}>Bachelor in Data Science</h3>
            <p className="project-desc" style={{color: "var(--green)", marginBottom: "15px"}}>Faculty of Computing and Information Technology (FCIT), Punjab University | Expected: 2027</p>
            <ul className="project-tech" style={{flexDirection: "column", gap: "10px", alignItems: "flex-start"}}>
              <li style={{background: "transparent", padding: 0, color: "var(--slate)"}}>• Programming Fundamentals, Object-Oriented Programming, Data Structures and Algorithms</li>
              <li style={{background: "transparent", padding: 0, color: "var(--slate)"}}>• Artificial Intelligence & Machine Learning, Data Warehousing, Databases and Systems</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="projects-section reveal">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <h2 className="section-heading" style={{ margin: 0, width: "auto" }}>Featured Projects</h2>
          <Link to="/projects" style={{ color: "var(--green)", display: "flex", alignItems: "center", gap: "5px", fontSize: "14px", fontFamily: "var(--font-mono)" }}>
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <Terminal size={40} className="project-icon" />
              <div className="project-links">
                <a href="https://github.com/Khawajaa07" target="_blank" rel="noreferrer" className="icon-link"><Github size={22} /></a>
              </div>
            </div>
            <h3 className="project-title">Enterprise Retail POS</h3>
            <p className="project-desc">A full-stack POS solution featuring real-time inventory synchronization between an Electron-based desktop application and a Next.js e-commerce website.</p>
            <ul className="project-tech">
              <li>Electron</li>
              <li>React/Next.js</li>
              <li>Node.js</li>
            </ul>
          </div>
          
          <div className="project-card">
            <div className="project-header">
              <DatabaseBackup size={40} className="project-icon" />
              <div className="project-links">
                <a href="https://github.com/Khawajaa07" target="_blank" rel="noreferrer" className="icon-link"><Github size={22} /></a>
              </div>
            </div>
            <h3 className="project-title">Car Price Predictor</h3>
            <p className="project-desc">An interactive machine learning dashboard using Streamlit to predict car resale prices using a Random Forest model.</p>
            <ul className="project-tech">
              <li>Python</li>
              <li>Pandas</li>
              <li>Streamlit</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
