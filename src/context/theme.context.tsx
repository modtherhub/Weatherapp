import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext<any>(null);

const THEME_KEY = 'theme';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(true);


  const saveThemeToLocalStorage = (theme:any) => {
    localStorage.setItem(THEME_KEY, JSON.stringify(true));
  };

  useEffect(() => {
  const themeString = localStorage.getItem(THEME_KEY);

  if (themeString === 'dark') {
  setDark(true);
} else if (themeString === 'light') {
  setDark(false);
}

  const isSystemThemeDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  setDark(isSystemThemeDark);
}, []);

  return (
    <ThemeContext.Provider
      value={{ dark, setDark, saveThemeToLocalStorage }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
export default ThemeContext;
