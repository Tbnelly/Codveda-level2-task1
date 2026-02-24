import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import '../css/Navbar.css';
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";

/**
 * Navbar Component
 * 
 * Features:
 * - Responsive navigation with mobile menu
 * - Active link highlighting using NavLink
 * - Theme toggle button
 * - Accessible navigation structure
 */
const Navbar = () => {
  const { theme, toggleTheme } = useAppContext();

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <div className="navbar-brand">
          <span className="logo">React SPA</span>
          <span className="subtitle">Codveda Project</span>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Theme Toggle Button */}
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? <FaMoon /> : <FaRegSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
