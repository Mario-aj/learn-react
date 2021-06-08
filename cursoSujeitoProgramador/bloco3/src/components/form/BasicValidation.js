import React, { Component } from "react";

class Methods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: { name: "", email: "", password: "", error: "" },
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { name, email, password } = this.state.form;

    if (name.trim() && email.trim() && password.trim()) {
      this.updateForm({ name: "error", value: "" });
      alert(`name: ${name} \nemail: ${email} \n password: ${password}`);
    } else
      this.updateForm({ name: "error", value: "Ops! something is missing!" });
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.updateForm({ name, value });
  }

  updateForm({ name, value }) {
    let { form } = this.state;

    form[name] = value;

    this.setState({ form });
  }
}

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
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>E-mail: </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
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
