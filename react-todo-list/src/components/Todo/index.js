import { Component } from 'react';
import { v4 as uuid } from 'uuid';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      task: '',
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleTaskInputChange = this.handleTaskInputChange.bind(this);
  }

  addTodo() {
    const { task } = this.state;
    if (!task.trim()) return;

    const newTask = {
      id: uuid(),
      task,
      completed: false,
    };

    this.setState({ todo: [...this.state.todo, newTask] });
  }

  handleTaskInputChange(event) {
    this.setState({ task: event.target.value });
  }
}

export default Todo;
