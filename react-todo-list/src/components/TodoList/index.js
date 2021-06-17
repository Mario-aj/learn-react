import { Component } from 'react';

class TodoList extends Component {
  render() {
    const { todo } = this.props;

    return (
      <ul>
        {todo.map(item => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => {}}
            />
            <p>{item.task}</p>
            <button type="button" onClick={() => {}}>
              X
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
