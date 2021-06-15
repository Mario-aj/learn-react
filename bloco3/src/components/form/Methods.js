import { Component } from "react";

class Methods extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: { name: "", email: "", password: "", error: "" },
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { name, email, password } = this.state.form;

    if (name.trim() && email.trim() && password.trim()) {
      this.updateState({ name: "error", value: "" });
      alert(`name: ${name} \nemail: ${email} \n password: ${password}`);
    } else
      this.updateState({ name: "error", value: "Ops! something is missing!" });
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.updateState({ name, value });
  }

  updateState({ name, value }) {
    let { form } = this.state;

    form[name] = value;

    this.setState({ form });
  }
}

export default Methods;
