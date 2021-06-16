import { Component } from "react";
import Post from "./components/Post";
import { getPosts, Response } from "./services/api";

interface MyState {
  posts: Response[];
}

class App extends Component<{}, MyState> {
  constructor(props: {}) {
    super(props);
    this.state = { posts: [] };
  }

  async componentDidMount() {
    const posts = await getPosts();
    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default App;
