import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './contexts/theme-context';
import Routes from './routes';
import Header from './components/Header';
import GlobalStyles from './index.styles';

function App() {
  const [dark, setDark] = useState(true);

  const onChangeTheme = () => setDark(!dark);

  return (
    <BrowserRouter>
      <ThemeProvider value={{ dark, onChangeTheme }}>
        <Header />
        <Routes />
        <GlobalStyles dark={dark} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
