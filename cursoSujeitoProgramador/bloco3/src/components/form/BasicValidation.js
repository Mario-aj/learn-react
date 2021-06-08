import React, { Component } from "react";

class BasicValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      error: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { name, email, password } = this.state;

    if (name.trim() && email.trim() && password.trim()) {
      this.setState({ error: "" });
      alert(`name: ${name} \nemail: ${email} \n password: ${password}`);
    } else this.setState({ error: "Ops! something is missing!" });
  }

  render() {
    const { name, email, password, error } = this.state;

    return (
      <div>
        <h1>New Form with validation</h1>
        {error && <p>{error}</p>}
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div>
            <label>E-mail: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BasicValidation;
