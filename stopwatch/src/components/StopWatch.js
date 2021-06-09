/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import { FiCircle, FiPlay, FiPause, FiPower } from "react-icons/fi";

import "./index.css";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watch: 0,
      isRunning: false,
    };
    this.timer = null;
    this.Play = this.Play.bind(this);
  }

  Play() {
    if (this.timer === null) {
      this.timer = setInterval(() => {
        let { watch } = this.state;
        watch += 0.1;
        this.setState({ watch });
      }, 100);

      this.setState({ isRunning: true });
    } else {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ isRunning: false });
    }
  }

  render() {
    const { watch, isRunning } = this.state;

    return (
      <div className="container">
        <FiCircle color="#fff" size={320} className="circle" />
        <p className="stopwatch">{watch.toFixed(1)}</p>
        <div className="btn-container">
          <a onClick={this.Play} className="button">
            {isRunning ? (
              <FiPause color="#fff" size={50} />
            ) : (
              <FiPlay color="#fff" size={50} />
            )}
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
