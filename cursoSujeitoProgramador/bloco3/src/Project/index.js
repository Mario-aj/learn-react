import { Component } from "react";

import "./index.css";
import { phrases } from "./phrases";
import Button from "./Button";
import Banner from "./assets/banner.jpeg";

class RandomPhrases extends Component {
  constructor(props) {
    super(props);
    this.state = { prhase: "Click on button to generate phrase." };

    this.generatePhrase = this.generatePhrase.bind(this);
  }

  generatePhrase() {
    const index = Math.floor(Math.random() * phrases.length - 1);

    const prhase = phrases[index];
    this.setState({ prhase });
  }

  render() {
    return (
      <div className="container">
        <img src={Banner} alt="bannerUrl" className="img" />
        <Button
          text="Generate new phrases"
          onClick={this.generatePhrase}
          className="btn"
          type="button"
        />
        <h3 className="phrase">{this.state.prhase}</h3>
      </div>
    );
  }
}

export default RandomPhrases;
