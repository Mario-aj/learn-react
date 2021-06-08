import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, onClick, ...rest } = this.props;
    return (
      <div>
        <button onClick={onClick} {...rest}>
          {children}
        </button>
      </div>
    );
  }
}

export default Button;
