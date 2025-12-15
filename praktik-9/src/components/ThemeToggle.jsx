// File: src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${theme}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? '\u{2600}\u{FE0F}' : '\u{1F319}\u{FE0F}'}
      <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  );
};

export default ThemeToggle;