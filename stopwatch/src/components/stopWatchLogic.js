import { Component } from "react";

class StopWhatLogic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watch: 0,
      isRunning: false,
    };

    this.timer = null;
    this.Play = this.Play.bind(this);
    this.Clear = this.Clear.bind(this);
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

  Clear() {
    clearInterval(this.timer);
    this.timer = null;
    let state = this.state;

    state.watch = 0;
    state.isRunning = false;

    this.setState(state);
  }
}

export default StopWhatLogic;
