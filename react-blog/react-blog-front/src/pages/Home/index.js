import { useState } from 'react';
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
  const [posts, _] = useState(api.posts() || []);

  return (
    <Container>
      {posts.length >= 1 ? (
        posts.map(post => (
          <Post>
            <Header>
              <Title>NWL Together</Title>
              <Author>@Author: Mario Jorge</Author>
            </Header>
            <Image
              src="https://nextlevelweek.com/og/nlw-edition.png"
              alt="bannerUrl"
            />

            <Description>
              Um evento para dar o próximo passo na sua evolução como
              programadora ou programador. Um evento para dar o próximo passo na
              sua evolução como programadora ou programador. Um evento para dar
              o próximo passo na sua evolução como programadora ou programador.
              Um evento para dar o próximo passo na sua evolução como
              programadora ou programador.
            </Description>
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
