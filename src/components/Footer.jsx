import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Built and designed by Ahmad Bilal</p>
      <div className="footer-links">
        <a href="https://github.com/Khawaja-Ahmad7" target="_blank" rel="noreferrer"><Github size={16}/></a>
        <a href="https://linkedin.com/in/ahmad-bilal" target="_blank" rel="noreferrer"><Linkedin size={16}/></a>
      </div>
    </footer>
  );
}
