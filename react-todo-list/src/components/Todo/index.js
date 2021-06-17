import { Component } from 'react';
import { v4 as uuid } from 'uuid';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(task) {
    const todo = {
      id: uuid(),
      task,
      completed: false,
    };

    this.setState({ todo: [...this.state.todo, todo] });
  }
}

export default Todo;
