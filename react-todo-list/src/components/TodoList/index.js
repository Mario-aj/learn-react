import { FaTrash } from 'react-icons/fa';
import './styles.css';

const TodoList = ({ todo, removeTask, completTask }) => (
  <div className="list">
    {todo.map(item => (
      <div key={item.id} className="listItems">
        <div className="checkTask" onClick={() => completTask(item.id)}>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => {}}
            className="taskCheckbox"
          />
          <p
            className="taskDescription"
            style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
          >
            {item.task}
          </p>
        </div>
        <button
          type="button"
          onClick={() => removeTask(item.id)}
          className="removeButton"
        >
          <FaTrash size={14} color="#ff0000" />
        </button>
      </div>
    ))}
  </div>
);

export default TodoList;
