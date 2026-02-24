import { useEffect, useState } from 'react';
import '../css/PageTransition.css';

/**
 * PageTransition Component
 * 
 * Wraps page content with smooth fade-in animation
 * Provides consistent transition effects across all pages
 */
const PageTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    setIsVisible(true);

    // Reset on unmount
    return () => setIsVisible(false);
  }, []);

  return (
    <div className={`page-transition ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default PageTransition;
