// ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext : any = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme , isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Define your light and dark themes here
const lightTheme = { 
  // 1D976C => 93F9B9
  name : "lightTheme",
  primary : "#1D976C",
  primary_alt : "#63A885",
  gray : "#aaa",
  // gray_100 : "#EFF9F5",
  gray_100 : "azure",
  gray_900 : "#5E5D5E",
  gray_700 : "#aaa",
  gray_500 : "#ccc",
  gray_300 : "#eee",
  white : "#fff",
  black : "#212121"
}
const darkTheme = { 
  // 1D976C => 93F9B9
  name : "darkTheme",
  primary : "#1D976C",
  primary_alt : "#63A885",
  gray : "#aaa",
  // gray_100 : "#EFF9F5",
  gray_900 : "azure",
  gray_700 : "#eee",
  gray_500 : "#ccc",
  gray_300 : "#333",
  gray_100 : "#5E5D5E",
  black : "azure",
  white : "#212121"
}
