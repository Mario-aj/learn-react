/* eslint-disable jsx-a11y/anchor-is-valid */
import { FiCircle, FiPlay, FiPause, FiPower } from "react-icons/fi";

import StopWatchLogic from "./stopWatchLogic";
import "./index.css";

class StopWatch extends StopWatchLogic {
  render() {
    const { watch, isRunning, minute } = this.state;

    return (
      <div className="container">
        <FiCircle color="#fff" size={320} className="circle" />
        <p className="stopwatch">
          {this.formated(minute)}:{this.formated(watch.toFixed(1))}
        </p>
        <div className="btn-container">
          <a onClick={this.Play} className="button">
            {isRunning ? (
              <FiPause color="#fff" size={50} />
            ) : (
              <FiPlay color="#fff" size={50} />
            )}
          </a>

          <a onClick={this.Clear} className="button">
            <FiPower color="#fff" size={50} />
          </a>
        </div>
      </div>
    );
  }
}

export default StopWatch;
