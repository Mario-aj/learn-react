import Methods from "./Methods";

class BasicValidation extends Methods {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, email, password, error } = this.state.form;

    return (
      <div>
        <h1>New Form with validation</h1>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.onChange}
            />
          </div>

          <div>
            <label>E-mail: </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.onChange}
            />
          </div>

          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
            />
          </div>
          <br />

          <button type="submit">Submit</button>
        </form>

        <pre>
          <span>{name}</span> <br />
          <span>{email}</span> <br />
          <span>{password}</span>
        </pre>
      </div>
    );
  }
}

export default BasicValidation;
