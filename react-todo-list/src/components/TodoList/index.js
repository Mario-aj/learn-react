import './styles.css';

const TodoList = ({ todo, removetodo }) => (
  <div className="list">
    {todo.map(item => (
      <div key={item.id} className="listItems">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => {}}
          className="taskCheckbox"
        />
        <p className="taskDescription">{item.task}</p>
        <button
          type="button"
          onClick={() => removetodo}
          className="removeButton"
        >
          X
        </button>
      </div>
    ))}
  </div>
);

export default TodoList;
