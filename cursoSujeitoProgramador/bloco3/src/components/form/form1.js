import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      gender: "Male",
    };
  }

  render() {
    const { email, password, gender } = this.state;
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

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <select
          name="gender"
          value={gender}
          onChange={(e) => this.setState({ gender: e.target.value })}
        >
          <option value="male">Male</option>
          <option value="Famile">Famile</option>
        </select>

        <pre>
          <span>{email}</span> <br />
          <span>{password}</span> <br />
          <span>{gender}</span>
        </pre>
      </div>
    );
  }
}

export default Form;
