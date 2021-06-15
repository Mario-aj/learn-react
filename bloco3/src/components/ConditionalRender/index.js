import React, { Component } from "react";

class ConditionalRender extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      number: 1,
      mood: false,
    };

    this.changeMood = this.changeMood.bind(this);
  }

  changeMood() {
    this.setState({ mood: !this.state.mood });
  }

  render() {
    return (
      <>
        <hr />
        <h1>Conditional render</h1>
        <div>
          {this.state.number === 1 && <h1>Welcome my friend!</h1>}
          <h3>We're learning Reactjs</h3>
        </div>

        <div>
          {this.state.mood ? <h1>I'm happy (^_^)</h1> : <h1>I'm sad (~_~)</h1>}

          <button type="button" onClick={this.changeMood}>
            change mood
          </button>
        </div>
      </>
    );
  }
}

export default ConditionalRender;
