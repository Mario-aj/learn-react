import Todo from '../Todo';
import './styles.css';

class TodoForm extends Todo {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { task } = this.state;
    this.addTodo(task);
  }

  render() {
    const { task } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={task}
          onChange={event => this.setState({ task: event.target.value })}
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
