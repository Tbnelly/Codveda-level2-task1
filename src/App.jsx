import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

/**
 * Main App Component
 * 
 * Structure:
 * - Wraps entire app with AppProvider for global state
 * - Uses BrowserRouter for client-side routing
 * - Implements consistent layout with Navbar and Footer
 * - Defines routes for all pages
 */
function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          {/* Navigation bar - visible on all pages */}
          <Navbar />
          
          {/* Main content area */}
          <main className="main-content">
            <Routes>
              {/* Define application routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          {/* Footer - visible on all pages */}
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
