import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Hearder';
import GLobalStyles from './globalStyles';

const App = () => {
  const darkMode = false;
  return (
    <BrowserRouter>
      <Header darkMode={darkMode} />
      <Routes />
      <GLobalStyles darkMode={darkMode} />
    </BrowserRouter>
  );
};

export default App;
