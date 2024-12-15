import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const [textColour, setTextColour] = useState(theme === 'light' ? '#121212' : '#ffffff');
  const [bgColour, setBgColour] = useState(theme === 'light' ? '#ffffff' : '#121212');
  const [subTextColour, setSubTextColour] = useState(theme === 'light' ? '#555555' : '#cccccc');
  const [containerColour, setContainerColour] = useState(theme === 'light' ? '#f5f5f5' : '#1e1e1e');

  const handleBgColour = (colour) => setBgColour(colour);
  const handleTextColour = (colour) => setTextColour(colour);
  const handleSubTextColour = (colour) => setSubTextColour(colour);
  const handleContainerColour = (colour) => setContainerColour(colour);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setBgColour(newTheme === 'light' ? '#ffffff' : '#121212');
    setTextColour(newTheme === 'light' ? '#121212' : '#ffffff');
    setSubTextColour(newTheme === 'light' ? '#555555' : '#cccccc');
    setContainerColour(newTheme === 'light' ? '#f5f5f5' : '#1e1e1e');
    localStorage.setItem('app-theme', newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        bgColour,
        handleBgColour,
        textColour,
        handleTextColour,
        subTextColour,
        handleSubTextColour,
        containerColour,
        handleContainerColour,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
