import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './styles.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      todo: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { task } = this.state;
    const todo = {
      id: uuid(),
      task,
      completed: false,
    };

    this.setState({ todo: [...this.state.todo, todo] });
    this.setState({ task: '' });

    console.log(this.state.todo);
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
