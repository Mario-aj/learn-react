import React, { Component } from "react";

class BasicValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { name } = this.state;
    alert(name);
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <h1>New Form with validation</h1>

        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
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
