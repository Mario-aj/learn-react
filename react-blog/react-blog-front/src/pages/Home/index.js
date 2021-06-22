import { useState, useEffect } from 'react';
import api from '../../services/api';

import {
  Container,
  Post,
  Header,
  Title,
  Author,
  Image,
  Description,
} from './styles';

const Home = () => {
  const [posts, setPosts] = useState(() => []);

  useEffect(() => {
    async function getPosts() {
      const response = await api.posts();
      setPosts(response);
    }

    getPosts();
  }, []);

  return (
    <Container>
      {posts.length >= 1 ? (
        posts.map(post => (
          <Post>
            <Header>
              <Title>{post.title}</Title>
              <Author>@Author:{post.author}</Author>
            </Header>
            <Image src={post.bannerUrl} alt="bannerUrl" />

            <Description>{post.description}</Description>
          </Post>
        ))
      ) : (
        <div style={{ fontSize: '2rem', textAlign: 'center' }}>
          There is no post yet! :):)
        </div>
      )}
    </Container>
  );
};

export default Home;
