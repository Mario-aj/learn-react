import './styles.css';

const TodoForm = ({ addTodo, task, handleTaskInputChange }) => {
  const onSubmit = e => {
    e.preventDefault();
    addTodo();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={task} onChange={handleTaskInputChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
