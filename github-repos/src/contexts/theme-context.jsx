import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  dark: true,
  onChangeTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const onChangeTheme = () => setDark(!dark);

  const value = {
    dark,
    onChangeTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
