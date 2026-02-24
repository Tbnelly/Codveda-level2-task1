import { createContext, useContext, useState, useEffect } from 'react';

/**
 * AppContext - Global state management using React Context API
 * 
 * This context provides:
 * - Theme toggling (light/dark mode)
 * - Visit counter across pages
 * - User message state
 */

// Create the context
const AppContext = createContext();

/**
 * Custom hook to use the AppContext
 * Ensures context is used within provider
 */
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

/**
 * AppProvider Component
 * Wraps the entire application to provide global state
 */
export const AppProvider = ({ children }) => {
  // Theme state - persisted in localStorage
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Visit counter - persisted in localStorage
  const [visitCount, setVisitCount] = useState(() => {
    const savedCount = localStorage.getItem('visitCount');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  // User message state - shared across pages
  const [userMessage, setUserMessage] = useState('');

  /**
   * Toggle between light and dark theme
   */
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  /**
   * Increment visit counter
   */
  const incrementVisitCount = () => {
    setVisitCount((prevCount) => prevCount + 1);
  };

  // Persist theme to localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Persist visit count to localStorage
  useEffect(() => {
    localStorage.setItem('visitCount', visitCount.toString());
  }, [visitCount]);

  // Increment visit count on mount
  useEffect(() => {
    incrementVisitCount();
  }, []);

  // Context value object
  const value = {
    theme,
    toggleTheme,
    visitCount,
    userMessage,
    setUserMessage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
