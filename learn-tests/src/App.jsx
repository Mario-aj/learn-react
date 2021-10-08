import { Counter, Form, Repos } from './components';
import './App.css';

function App() {
  const onSubmit = ({ username, password }) => {
    console.log(username, password);
  };

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Form onSubmit={onSubmit} /> */}
      <Repos />
    </div>
  );
}

export default App;
