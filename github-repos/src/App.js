import React, { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import GlobalStyles from './index.styles';

export const ThemeContext = createContext({
  dark_theme: true,
  updateTheme: () => {},
});

function App() {
  const [dark, setDark] = useState(true);

  const onChangeTheme = () => setDark(!dark);

  const value = {
    dark_theme: dark,
    updateTheme: onChangeTheme,
  };
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={value}>
        <Header />
        <Routes />
        <GlobalStyles dark={dark} />
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
