import { useAppContext } from '../context/AppContext';
import PageTransition from '../components/PageTransition';
import '../css/About.css';

/**
 * About Page Component
 * 
 * Features:
 * - Project information
 * - Technology stack showcase
 * - Displays user message from shared state
 * - Team/developer information
 */
const About = () => {
  const { userMessage, visitCount } = useAppContext();

  const technologies = [
    { name: 'React 18', category: 'Framework' },
    { name: 'React Router', category: 'Routing' },
    { name: 'Context API', category: 'State Management' },
    { name: 'Vite', category: 'Build Tool' },
    { name: 'CSS3', category: 'Styling' },
    { name: 'JavaScript ES6+', category: 'Language' }
  ];

  return (
    <PageTransition>
      <div className="about-page">
        {/* Page Header */}
        <header className="page-header">
          <h1>About This Project</h1>
          <p className="page-subtitle">
            A professional React SPA demonstrating modern web development practices
          </p>
        </header>

        {/* Project Info Section */}
        <section className="info-section">
          <div className="info-card">
            <h2> Project Overview</h2>
            <p>
              This Single Page Application was built as part of the Codveda internship 
              program to showcase proficiency in modern React development, component-based 
              architecture, and state management using the Context API.
            </p>
            <p>
              The application demonstrates clean code practices, responsive design principles, 
              and smooth user experience with client-side routing.
            </p>
          </div>

          <div className="info-card">
            <h2> Key Learning Objectives</h2>
            <ul className="objectives-list">
              <li>Implementing React Router for SPA navigation</li>
              <li>Managing global state with Context API</li>
              <li>Building reusable, modular components</li>
              <li>Creating responsive, mobile-first layouts</li>
              <li>Implementing theme switching functionality</li>
              <li>Following React best practices and hooks</li>
            </ul>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="tech-section">
          <h2>🛠️ Technology Stack</h2>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-card">
                <h3>{tech.name}</h3>
                <span className="tech-category">{tech.category}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Shared State Demo */}
        {userMessage && (
          <section className="shared-state-demo">
            <h2>🔗 Shared State Example</h2>
            <p className="demo-description">
              This message was set on the Home page and is accessible here via Context API:
            </p>
            <div className="state-display">
              <strong>Message:</strong> {userMessage}
            </div>
          </section>
        )}

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stat-card">
            <div className="stat-number">{visitCount}</div>
            <div className="stat-label">Total Visits</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">3</div>
            <div className="stat-label">Pages</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Responsive</div>
          </div>
        </section>

        {/* Developer Info */}
        <section className="developer-section">
          <h2> About the Developer</h2>
          <p>
            This project was developed as part of the Codveda internship program, 
            showcasing skills in React development, modern JavaScript, and web design.
          </p>
          <p>
            Feel free to explore the code on GitHub or connect on LinkedIn!
          </p>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
