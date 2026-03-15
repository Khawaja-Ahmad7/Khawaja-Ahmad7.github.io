import { Github, Code, Terminal, DatabaseBackup } from "lucide-react";

export default function Projects() {
  return (
    <section className="projects-section reveal active">
      <h2 className="section-heading">All Projects</h2>
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
            <li>Socket.IO</li>
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
          <p className="project-desc">An interactive machine learning dashboard in Streamlit to predict car resale prices in the UK using a Random Forest model, with extensive data preprocessing.</p>
          <ul className="project-tech">
            <li>Python</li>
            <li>Pandas</li>
            <li>Streamlit</li>
            <li>Scikit-learn</li>
          </ul>
        </div>

        <div className="project-card">
          <div className="project-header">
            <Code size={40} className="project-icon" />
            <div className="project-links">
              <a href="https://github.com/Khawajaa07" target="_blank" rel="noreferrer" className="icon-link"><Github size={22} /></a>
            </div>
          </div>
          <h3 className="project-title">AI Tech Buying Guide</h3>
          <p className="project-desc">An AI chatbot that uses natural language processing to recommend technical products based on user preferences and requirements using Groq LLM API.</p>
          <ul className="project-tech">
            <li>Python</li>
            <li>Gradio</li>
            <li>Groq API</li>
          </ul>
        </div>

        <div className="project-card">
          <div className="project-header">
            <Terminal size={40} className="project-icon" />
            <div className="project-links">
              <a href="https://github.com/Khawajaa07" target="_blank" rel="noreferrer" className="icon-link"><Github size={22} /></a>
            </div>
          </div>
          <h3 className="project-title">Dental Care App</h3>
          <p className="project-desc">An Android application packed with a brushing timer, daily streak tracker, appointment reminders, and automated Python-to-Android packaging.</p>
          <ul className="project-tech">
            <li>Python</li>
            <li>Kivy</li>
            <li>Buildozer</li>
          </ul>
        </div>

        <div className="project-card">
          <div className="project-header">
            <DatabaseBackup size={40} className="project-icon" />
            <div className="project-links">
              <a href="https://github.com/Khawajaa07" target="_blank" rel="noreferrer" className="icon-link"><Github size={22} /></a>
            </div>
          </div>
          <h3 className="project-title">Data Flow / ETL Pipeline</h3>
          <p className="project-desc">An automated academic data integration pipeline using Python and Supabase. Collected and validated metadata from Semantic Scholar APIs.</p>
          <ul className="project-tech">
            <li>Python</li>
            <li>Supabase</li>
            <li>ETL</li>
          </ul>
        </div>

        <div className="project-card">
          <div className="project-header">
            <Code size={40} className="project-icon" />
            <div className="project-links">
              <a href="https://github.com/Khawajaa07" target="_blank" rel="noreferrer" className="icon-link"><Github size={22} /></a>
            </div>
          </div>
          <h3 className="project-title">Flappy Bird Clone</h3>
          <p className="project-desc">A 2D arcade-style Flappy Bird Game Clone with physics-based controls, obstacle spawning, collision detection, and a scoring system.</p>
          <ul className="project-tech">
            <li>C#</li>
            <li>Unity</li>
            <li>Game Dev</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
