import { useAppContext } from '../context/AppContext';
import PageTransition from '../components/PageTransition';
import '../css/Home.css';

/**
 * Home Page Component
 * 
 * Features:
 * - Welcome message
 * - Displays current theme
 * - Interactive user message input (shared state demo)
 * - Feature showcase cards
 */
const Home = () => {
  const { theme, userMessage, setUserMessage } = useAppContext();

  const features = [
    {
      icon: '⚛️',
      title: 'React 18',
      description: 'Built with the latest React features and hooks'
    },
    {
      icon: '🎨',
      title: 'Theme Switching',
      description: 'Toggle between light and dark modes seamlessly'
    },
    {
      icon: '🚀',
      title: 'React Router',
      description: 'Smooth client-side navigation without page reloads'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Mobile-first approach with clean, modern UI'
    },
    {
      icon: '🔄',
      title: 'Context API',
      description: 'Global state management across all pages'
    },
    {
      icon: '⚡',
      title: 'Vite',
      description: 'Lightning-fast build tool and dev server'
    }
  ];

  return (
    <PageTransition>
      <div className="home-page">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">
            Welcome to React SPA
          </h1>
          <p className="hero-subtitle">
            A modern Single Page Application built for the Codveda Internship
          </p>
          <div className="theme-badge">
            Current Theme: <span className="badge">{theme}</span>
          </div>
        </section>

        {/* Interactive Message Section */}
        <section className="message-section">
          <h2>Try Shared State</h2>
          <p className="section-description">
            Enter a message below. It will be accessible on all pages using Context API!
          </p>
          <div className="message-input-group">
            <input
              type="text"
              className="message-input"
              placeholder="Enter your message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              aria-label="User message input"
            />
            {userMessage && (
              <div className="message-display">
                <strong>Your message:</strong> {userMessage}
              </div>
            )}
          </div>
        </section>

        {/* Features Grid */}
        <section className="features-section">
          <h2>Key Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
