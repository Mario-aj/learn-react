import Start from "./StartCounting";

class EndCounting extends Start {
  constructor(props) {
    super(props);
    this.Clear = this.Clear.bind(this);
  }

  Clear() {
    clearInterval(this.timer);
    this.timer = null;
    let state = this.state;

    state.second = 0;
    state.minute = 0;
    state.isRunning = false;

    this.setState(state);
  }
}

export default EndCounting;
