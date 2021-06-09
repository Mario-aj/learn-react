/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { FiCircle, FiPlay, FiPower } from "react-icons/fi";

import "./index.css";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watch: 0,
    };
  }

  render() {
    return (
      <div className="container">
        <FiCircle color="#fff" size={320} className="circle" />
        <p className="stopwatch">00:00</p>
        <div className="btn-container">
          <a className="button">
            <FiPlay color="#fff" size={50} />
          </a>

          <a className="button">
            <FiPower color="#fff" size={50} />
          </a>
        </div>
      </div>
    );
  }
}

export default StopWatch;
