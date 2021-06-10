import EndCounting from "./EndCounting";

class StopWhatLogic extends EndCounting {
  constructor(props) {
    super(props);
    this.formatedNumber = this.formatedNumber.bind(this);
  }

  formatedNumber(number) {
    return number >= 10 ? number : `0${number}`;
  }
}

export default StopWhatLogic;
