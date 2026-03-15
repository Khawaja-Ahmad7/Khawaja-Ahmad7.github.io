import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact-section reveal active" style={{paddingTop: "150px"}}>
      <h2 className="section-heading center">Let's Talk</h2>
      <h3 className="contact-title">Get In Touch</h3>
      <p className="contact-desc">
        Currently looking for internship and junior developer roles. My inbox is always open. Whether you have a question or just want to network!
      </p>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", marginBottom: "40px" }}>
        <a href="mailto:ahmadb2dps@gmail.com" className="btn-primary size-lg mx-auto">
          <Mail size={20} /> Say Hello
        </a>
      </div>
      
      <div className="contact-info" style={{ marginTop: "40px", color: "var(--light-slate)" }}>
        <p><strong>Email:</strong> ahmadb2dps@gmail.com</p>
        <p><strong>Location:</strong> Lahore, Punjab</p>
      </div>
    </section>
  );
}
