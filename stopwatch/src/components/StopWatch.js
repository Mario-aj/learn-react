/* eslint-disable jsx-a11y/anchor-is-valid */
import { FiCircle, FiPlay, FiPause, FiPower } from "react-icons/fi";

import StopWatchLogic from "./Logic";
import "./index.css";

class StopWatch extends StopWatchLogic {
  render() {
    const { second, isRunning, minute } = this.state;

    return (
      <div className="container">
        <FiCircle color="#fff" size={350} className="circle" />
        <p className="stopwatch">
          {this.formatedNumber(minute)}:{this.formatedNumber(second.toFixed(1))}
        </p>
        <div className="btn-container">
          <a onClick={this.StartAndStop} className="button">
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
