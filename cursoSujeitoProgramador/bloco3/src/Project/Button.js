import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { text, onClick, ...rest } = this.props;
    return (
      <div>
        <button onClick={onClick} {...rest}>
          {text}
        </button>
      </div>
    );
  }
}

export default Button;
