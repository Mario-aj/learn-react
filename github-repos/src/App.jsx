import { BrowserRouter } from 'react-router-dom';
import { useTheme } from 'src/hooks/useTheme';
import Routes from 'src/routes';
import Header from 'src/components/Header';
import GlobalStyles from 'src/index.styles';

function App() {
  const { dark } = useTheme();
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles dark={dark} />
    </BrowserRouter>
  );
}

export default App;
