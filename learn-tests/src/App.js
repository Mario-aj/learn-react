import { Counter, Form } from './components';
import './App.css';

function App() {
  const onSubmit = ({ username, password }) => {
    console.log(username, password);
  };

  return (
    <div className="App">
      {/* <Counter /> */}

      <Form onSubmit={onSubmit} />
    </div>
  );
}

export default App;
