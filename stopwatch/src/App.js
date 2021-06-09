import "./index.css";
import { FiCircle, FiPlay, FiPause, FiPower } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <div>
        <FiCircle color="#fff" size={320} />
        <p className="stopWatch">00:00</p>
        <div>
          <a className="button">
            <FiPlay color="#fff" size={50} />
          </a>

          <a className="button">
            <FiPower color="#fff" size={50} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
