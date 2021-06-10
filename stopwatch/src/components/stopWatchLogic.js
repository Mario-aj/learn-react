import EndCount from "./EndCount";

class StopWhatLogic extends EndCount {
  formatedNumber(number) {
    return number >= 10 ? number : `0${number}`;
  }
}

export default StopWhatLogic;
