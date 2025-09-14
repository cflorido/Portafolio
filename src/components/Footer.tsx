
import { FaHeart } from "react-icons/fa"; // importamos el corazón
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">Carol Florido</h3>
        <p className="footer-text">
          © {new Date().getFullYear()} | Designed & Built with{" "}
          <FaHeart className="footer-heart" />
        </p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/carol-florido-a22202327/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:carolsofiafloridocastro@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
