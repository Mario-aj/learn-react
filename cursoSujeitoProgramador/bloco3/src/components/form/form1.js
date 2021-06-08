import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="email">E-mail: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <pre>{(email, password)}</pre>
      </div>
    );
  }
}

export default Form;
