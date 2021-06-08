import { Component } from "react";

import "./index.css";
import Banner from "./assets/banner.jpeg";

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

class RandomPhrases extends Component {
  constructor(props) {
    super(props);
    this.state = { prhase: "Click on button to generate phrase." };
    this.phrases = [
      "É no desprezo dos pequenos deveres que se faz a aprendizagem das grandes faltas.",
      "Não podemos ensinar a outra pessoa diretamente; só podemos facilitar sua aprendizagem.",
      "Agora não quero saber de mais nada, só quero aperfeiçoar o que não sei.",
      "A única coisa que interfere com meu aprendizado é a minha educação.",
      "É fazendo que se aprende a fazer aquilo que se deve aprender a fazer.",
      "A alegria que se tem em pensar e aprender faz-nos pensar e aprender ainda mais.",
      "A qualidade mais valiosa para o aprendizado é uma atitude positiva.",
      "A repetição é a chave para o aprendizado.",
      "A sabedoria não vem do acerto, mas do aprendizado com os erros.",
      "O aprendizado é conhecimento, e conhecimento é liberdade e poder.",
      "Seus problemas são reflexos das lições que precisa aprender.",
      "O conhecimento vem do instrutor, a sabedoria do teu interior.",
      "O que fala semeia; o que escuta recolhe.",
      "Erros nos preparam para a vida.",
      "Me esforço para ser melhor a cada dia, pois bondade também se aprende.",
      "A dificuldade é um severo instrutor.",
      "O passado é lição para se meditar, não para se reproduzir.",
    ];

    this.generatePhrase = this.generatePhrase.bind(this);
  }

  generatePhrase() {
    const index = Math.floor(Math.random() * this.phrases.length - 1);

    const prhase = this.phrases[index];
    this.setState({ prhase });
  }

  render() {
    return (
      <div className="container">
        <img src={Banner} alt="bannerUrl" className="img" />
        <Button
          text="Generate new phrases"
          onClick={this.generatePhrase}
          className="btn"
          type="button"
        />
        <h3 className="phrase">{this.state.prhase}</h3>
      </div>
    );
  }
}

export default RandomPhrases;
