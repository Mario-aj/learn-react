import { Component } from "react";

import "./index.css";
import Banner from "./assets/banner.jpeg";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, onClick, ...rest } = this.props;
    return (
      <div>
        <button onClick={onClick} {...rest}>
          {text}
        </button>
      </div>
    );
  }
}

class RandomPhrases extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.phrases = [];
  }

  render() {
    return (
      <div className="container">
        <img src={Banner} alt="bannerUrl" className="img" />
        <Button
          text="Generate new phrases"
          onClick={() => {
            alert("CLICOU!");
          }}
          className="btn"
          type="button"
        />

        <h3 className="phrase">here will be the generated phrase!</h3>
      </div>
    );
  }
}

export default RandomPhrases;
