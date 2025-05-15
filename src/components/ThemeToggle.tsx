import React from 'react';
import { useTheme } from './ThemeContext';
import '../styles/ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button 
      className="theme-icon-button" 
      onClick={toggleDarkMode}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? 'Switch to light' : 'Switch to dark'}
    </button>
  );
};

export default ThemeToggle; 