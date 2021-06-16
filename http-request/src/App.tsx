import { Component } from 'react';
import Post from './components/Post';
import { getPosts } from './services/api';

export interface Response {
  id: number;
  titulo: string;
  capa: string;
  subtitulo: string;
  categoria: string;
}

interface MyState {
  posts: Array<Response>;
}

class App extends Component<{}, MyState> {
  constructor(props: {}) {
    super(props);
    this.state = { posts: [] };
  }

  async componentDidMount() {
    const response = await getPosts();
    console.log(response);
    const posts = response.data;
    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;
    console.log(posts instanceof Object);
    return (
      <div className="App">
        {/* {posts.map<JSX.Element>(post => (
          <Post key={post.id} post={post} />
        ))} */}
      </div>
    );
  }
}

export default App;
