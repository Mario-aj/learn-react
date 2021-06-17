import './styles.css';

const TodoForm = ({ addTask, task, handleTaskInputChange }) => {
  const onSubmit = e => {
    e.preventDefault();
    addTask();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleTaskInputChange}
        className="taskInput"
      />
      <button type="submit" className="addButton">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
