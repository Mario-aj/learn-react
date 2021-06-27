import React, { useCallback, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import api from '../../services/api';
import { Container, Form, SubmitButton } from './styles';

const Home = () => {
  const { dark } = useTheme();
  const [newRepository, setNewRepository] = useState('');
  const [error, setError] = useState('');

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!newRepository.trim()) {
        setError('please, write a repo name');
        return;
      }

      const onSearchRepo = async () => {
        const response = await api.searchRepo(newRepository);

        if (response.error) {
          setError(response.error);
          return;
        }

        console.log(response);
      };

      onSearchRepo();
    },
    [newRepository]
  );

  const onChangeInput = (e) => {
    setNewRepository(e.target.value);
    setError('');
  };

  return (
    <Container dak={dark}>
      <h1>My repositories</h1>

      <Form onSubmit={onSubmit} error={!!error}>
        <input
          type="text"
          placeholder="Search repos"
          value={newRepository}
          onChange={onChangeInput}
        />
        <SubmitButton type="submit">+</SubmitButton>
      </Form>
      {!!error && <span>{error}</span>}
    </Container>
  );
};

export default Home;
