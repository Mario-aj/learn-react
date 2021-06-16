import { Component } from "react";
import "./styles.css";

class Post extends Component {
  render() {
    const { titulo, capa, subtitulo, categoria } = this.props.post;
    return (
      <div className="container">
        <article className="post">
          <p className="title">{titulo}</p>
          <span className="category">{categoria}</span>
          <img src={capa} alt="img" className="image" />

          <p className="subtitle">{subtitulo}</p>
          <button type="button">Acessar</button>
        </article>
      </div>
    );
  }
}

export default Post;
