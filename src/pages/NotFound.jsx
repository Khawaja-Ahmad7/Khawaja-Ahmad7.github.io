import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="reveal active" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", textAlign: "center" }}>
      <AlertTriangle size={80} color="var(--green)" style={{ marginBottom: "20px" }} />
      <h1 style={{ fontSize: "clamp(40px, 8vw, 80px)", margin: 0 }}>404</h1>
      <h2 style={{ color: "var(--light-slate)", marginBottom: "30px" }}>Page Not Found</h2>
      <p style={{ maxWidth: "500px", marginBottom: "40px" }}>
        The page you are looking for doesn`t exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">
        <Home size={20} /> Return Home
      </Link>
    </section>
  );
}
