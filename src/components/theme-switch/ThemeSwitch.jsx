import { useState } from 'react';
import './theme-switch.css';

function useThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    return savedTheme;
  });

  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  return [theme, toggleTheme];
}

function ThemeSwitch() {
  const [theme, toggleTheme] = useThemeSwitcher();

  return (
    <div className={theme}>
      <div className="theme-container">
        <p>I&apos;m {theme === 'dark' ? 'Dark' : 'Light'}</p>
        <button className={theme} onClick={toggleTheme}>
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default ThemeSwitch;
