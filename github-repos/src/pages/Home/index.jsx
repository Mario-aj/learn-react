import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Container, Form, SubmitButton } from './styles';

const Home = () => {
  const { dark } = useTheme();

  return (
    <Container dak={dark}>
      <h1>My repositories</h1>

      <Form onSbumit={() => {}}>
        <input type="text" placeholder="Search repos" />
        <SubmitButton type="submit">+</SubmitButton>
      </Form>
    </Container>
  );
};

export default Home;
