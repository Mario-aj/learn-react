import Todo from '../Todo';

class TodoList extends Todo {
  render() {
    const { todo } = this.state;

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
