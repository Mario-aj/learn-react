import { createContext } from 'react';

export const ThemeContext = createContext({
  dark_theme: true,
  updateTheme: () => {},
});
