import { useAppContext } from '../context/AppContext';
import '../css/Footer.css';

/**
 * Footer Component
 * 
 * Features:
 * - Displays visit counter from global state
 * - Shows current year dynamically
 * - Responsive design
 */
const Footer = () => {
  const { visitCount } = useAppContext();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">
            Built with ❤️ for Codveda Internship | © {currentYear}
          </p>
          <p className="visit-counter">
            Total Visits: <span className="counter-badge">{visitCount}</span>
          </p>
        </div>
        <div className="footer-links">
          <a 
            href="https://github.com/Tbnelly" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/bamidele-nelly-tobiloba-92ba421aa" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
