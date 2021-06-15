import React, { Component } from "react";

class Member extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      name: prop.name,
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({ name: "Mario" });
  }

  logout() {
    this.setState({ name: "Visitante" });
  }
  render() {
    return (
      <div>
        <h1>Bem-vindo(a) {this.state.name}</h1>

        <button type="button" onClick={this.login}>
          Entrar no sistema
        </button>
        <button type="button" onClick={this.logout}>
          Sair
        </button>
      </div>
    );
  }
}

export default Member;
