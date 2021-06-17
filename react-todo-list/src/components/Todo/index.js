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

  addTodo({ task }) {
    const prevTodo = this.state.todo;
    const newTodo = {
      id: uuid(),
      task,
      completed: false,
    };

    const todo = [...prevTodo, newTodo];

    this.setState({ todo });
  }
}

export default Todo;
