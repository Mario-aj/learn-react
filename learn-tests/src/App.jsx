import { Counter, Form, Repos, Location } from './components';
import './App.css';

function App() {
  // const onSubmit = ({ username, password }) => {
  //   console.log(username, password);
  // };

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Form onSubmit={onSubmit} /> */}
      {/* <Repos /> */}
      <Location />
    </div>
  );
}

export default App;
