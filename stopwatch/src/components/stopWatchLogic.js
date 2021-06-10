import EndCounting from "./EndCounting";

class StopWhatLogic extends EndCounting {
  formatedNumber(number) {
    return number >= 10 ? number : `0${number}`;
  }
}

export default StopWhatLogic;
