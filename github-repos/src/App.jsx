import { useTheme } from './hooks/useTheme';
import Routes from './routes';
import Header from './components/Header';
import GlobalStyles from './index.styles';

function App() {
  const { dark } = useTheme();
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyles dark={dark} />
    </>
  );
}

export default App;
