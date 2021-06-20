import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Hearder";
import GLobalStyles from "./globalStyles";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GLobalStyles dark />
    </BrowserRouter>
  );
}

export default App;
