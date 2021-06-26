import { createContext } from 'react';

export const ThemeContext = createContext({
  dark: true,
  onChangeTheme: () => {},
});

export const ThemeProvider = ({ value, children }) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
