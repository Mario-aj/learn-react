import './styles.css';

const TodoList = ({ todo, removetodo }) => (
  <ul>
    {todo.map(item => (
      <li key={item.id}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => {}}
          className="taskCheckbox"
        />
        <p>{item.task}</p>
        <button
          type="button"
          onClick={() => removetodo}
          className="removeButton"
        >
          X
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
