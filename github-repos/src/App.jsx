import { BrowserRouter } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Routes from './routes';
import Header from './components/Header';
import GlobalStyles from './index.styles';

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
