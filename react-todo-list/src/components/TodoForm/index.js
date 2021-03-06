import './styles.css';

const TodoForm = ({ addTask, task, handleTaskInputChange }) => {
  const onSubmit = e => {
    e.preventDefault();
    addTask();
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <input
        type="text"
        value={task}
        onChange={event => handleTaskInputChange(event.target.value)}
        className="taskInput"
      />
      <button type="submit" className="addButton">
        Add task
      </button>
    </form>
  );
};

export default TodoForm;
