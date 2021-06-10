import { Component } from "react";

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watch: 0,
      isRunning: false,
      minute: 0,
    };

    this.timer = null;
    this.StartAndStop = this.StartAndStop.bind(this);
  }

  StartAndStop() {
    if (this.timer === null) {
      this.timer = setInterval(() => {
        let state = this.state;
        if (state.watch.toFixed(1) === "59.9") {
          state.minute += 1;
          state.watch = 0;
          this.setState(this.state);
        } else {
          state.watch += 0.1;
          this.setState(state);
        }
      }, 100);

      this.setState({ isRunning: true });
    } else {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ isRunning: false });
    }
  }
}

class PowerOff extends Play {
  constructor(props) {
    super(props);
    this.Clear = this.Clear.bind(this);
  }

  Clear() {
    clearInterval(this.timer);
    this.timer = null;
    let state = this.state;

    state.watch = 0;
    state.minute = 0;
    state.isRunning = false;

    this.setState(state);
  }
}

class StopWhatLogic extends PowerOff {
  formatedNumber(number) {
    return number >= 10 ? number : `0${number}`;
  }
}

export default StopWhatLogic;
