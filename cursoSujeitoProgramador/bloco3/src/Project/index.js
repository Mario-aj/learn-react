import { Component } from "react";

import Banner from "./assets/banner.jpeg";

class RandomPhrases extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.phrases = [];
  }

  render() {
    return (
      <div>
        <img src={Banner} alt="bannerUrl" />
      </div>
    );
  }
}

export default RandomPhrases;
