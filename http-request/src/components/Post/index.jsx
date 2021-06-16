import { Component } from "react";

class Post extends Component {
  render() {
    const { titulo, capa, subtitulo, categoria } = this.props.post;
    return (
      <div className="container">
        <article className="post">
          <div className="headerArticle">
            <p className="title">{titulo}</p>
            <span className="category">{categoria}</span>
          </div>
          <img src={capa} alt="img" className="image" />

          <p className="subtitle">{subtitulo}</p>
        </article>
      </div>
    );
  }
}

export default Post;
