export default function Experience() {
  return (
    <section className="projects-section reveal">
      <h2 className="section-heading">Experience</h2>
      <div className="experience-list">
        <div className="project-card" style={{marginBottom: "20px"}}>
          <h3 className="project-title" style={{marginBottom: "5px"}}>Infrastructure Support</h3>
          <p className="project-desc" style={{color: "var(--green)", marginBottom: "15px"}}>SoulTech Pakistan | Jan 2025 - Present</p>
          <ul className="project-tech" style={{flexDirection: "column", gap: "10px", alignItems: "flex-start"}}>
            <li style={{background: "transparent", padding: 0, color: "var(--slate)"}}>• Diagnosing and resolving a wide range of technical issues across hardware and software systems</li>
            <li style={{background: "transparent", padding: 0, color: "var(--slate)"}}>• Collaborating on the development and maintenance of the company official business website</li>
            <li style={{background: "transparent", padding: 0, color: "var(--slate)"}}>• Designing and implementing a custom POS system using Python, SQL Server, and Tkinter for a subsidiary business</li>
          </ul>
        </div>
        
        <div className="project-card" style={{marginBottom: "20px"}}>
          <h3 className="project-title" style={{marginBottom: "5px"}}>IT Support & Media Manager</h3>
          <p className="project-desc" style={{color: "var(--green)", marginBottom: "15px"}}>Al-Fazal Hospital | April 2024 - June 2024</p>
          <ul className="project-tech" style={{flexDirection: "column", gap: "10px", alignItems: "flex-start"}}>
            <li style={{background: "transparent", padding: 0, color: "var(--slate)"}}>• Provided comprehensive technical support to hospital staff</li>
            <li style={{background: "transparent", padding: 0, color: "var(--slate)"}}>• Organized and maintained digital patient records and data files securely</li>
            <li style={{background: "transparent", padding: 0, color: "var(--slate)"}}>• Managed hospital social media presence, including content creation, post design, and video production</li>
          </ul>
        </div>

        <h2 className="section-heading" style={{marginTop: "50px"}}>Education</h2>
        <div className="project-card">
          <h3 className="project-title" style={{marginBottom: "5px"}}>Bachelor in Data Science</h3>
          <p className="project-desc" style={{color: "var(--green)", marginBottom: "15px"}}>Faculty of Computing and Information Technology (FCIT), Punjab University | Expected: 2027</p>
          <ul className="project-tech" style={{flexDirection: "column", gap: "10px", alignItems: "flex-start"}}>
            <li style={{background: "transparent", padding: 0, color: "var(--slate)"}}>• Programming Fundamentals (Python), Object-Oriented Programming, Data Structures and Algorithms</li>
            <li style={{background: "transparent", padding: 0, color: "var(--slate)"}}>• Artificial Intelligence & Machine Learning, Data Warehousing, Databases and Systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
