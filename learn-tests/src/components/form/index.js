import './Form.css';

export const Form = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target.elements;

    onSubmit({ username: username.value, password: password.value });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username-field">Username</label>
        <input type="text" id="username-field" name="username" />
      </div>

      <div>
        <label htmlFor="password-field">Password</label>
        <input type="password" id="password-field" name="password" />
      </div>
      <div>
        <button type="submit">login</button>
      </div>
    </form>
  );
};
