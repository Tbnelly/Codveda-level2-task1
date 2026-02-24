import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import PageTransition from '../components/PageTransition';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import '../css/Contact.css';
import { FaMailBulk } from 'react-icons/fa';

/**
 * Contact Page Component
 * 
 * Features:
 * - Contact form with validation
 * - Success message feedback
 * - Displays user message from shared state
 * - Social links
 */
const Contact = () => {
  const { userMessage } = useAppContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  /**
   * Handle form input changes
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Handle form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <PageTransition>
      <div className="contact-page">
        {/* Page Header */}
        <header className="page-header">
          <h1>Get In Touch</h1>
          <p className="page-subtitle">
            Have questions or feedback? Feel free to reach out!
          </p>
        </header>

        <div className="contact-container">
          {/* Contact Form */}
          <section className="form-section">
            <h2>Send a Message</h2>
            
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Thank you for your message!</h3>
                <p>We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    aria-required="true"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    aria-required="true"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Your message..."
                    aria-required="true"
                  />
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            )}
          </section>

          {/* Contact Info & Shared State */}
          <aside className="info-sidebar">
            {/* Shared State Demo */}
            {userMessage && (
              <div className="sidebar-card">
                <h3>🔗 Your Saved Message</h3>
                <p className="sidebar-description">
                  From Context API:
                </p>
                <div className="message-box">
                  {userMessage}
                </div>
              </div>
            )}

            {/* Contact Information */}
            <div className="sidebar-card">
              <h3><FaMailBulk /> Contact Information</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>Email:</strong>
                  <a href="mailto:nellytobiloba@gmail.com">nellytobiloba@gmail.com</a>
                </div>
                <div className="contact-item">
                  <strong>Location:</strong>
                  <span>Remote / Worldwide</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="sidebar-card">
              <h3> Connect With Me</h3>
              <div className="social-links">
                <a 
                  href="https://github.com/Tbnelly" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon"><FaGithub /></span>
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/bamidele-nelly-tobiloba-92ba421aa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon"><FaLinkedin /></span>
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
