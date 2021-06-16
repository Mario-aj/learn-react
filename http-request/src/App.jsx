import { Component } from "react";
import { getPosts } from "./services";
import Post from "./components/Post";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    const response = await getPosts();
    let state = this.state;

    state.posts = response;
    this.setState(state);
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <header>
          <strong>LEARNING ABOUT REAQUEST IN REACTJS</strong>
        </header>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default App;
