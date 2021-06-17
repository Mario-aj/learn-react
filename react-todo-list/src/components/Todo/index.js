import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      task: '',
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleTaskInputChange = this.handleTaskInputChange.bind(this);
    this.completTask = this.completTask.bind(this);
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
    this.setState({ task: '' });
  }

  completTask(id) {
    let { todo } = this.state;

    let task = todo.find(item => item.id === id);
    task.completed = !task.completed;
    todo = Object.assign(todo, task);

    this.setState({ todo });
  }

  handleTaskInputChange(event) {
    this.setState({ task: event.target.value });
  }

  render() {
    const { task, todo } = this.state;
    return (
      <>
        <TodoForm
          task={task}
          handleTaskInputChange={this.handleTaskInputChange}
          addTodo={this.addTodo}
        />
        <TodoList todo={todo} completTask={this.completTask} />
      </>
    );
  }
}

export default Todo;
