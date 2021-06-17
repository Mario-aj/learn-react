import Todo from '../Todo';
import './styles.css';

class TodoForm extends Todo {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.addTodo();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleTaskInputChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
