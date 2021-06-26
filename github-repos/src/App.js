import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';
import GlobalStyles from './index.styles';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
