import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import api from '../../services/api';
import { Container, Form, SubmitButton } from './styles';

const Home = () => {
  const { dark } = useTheme();
  const [repositories, setRepositories] = useState([]);
  const [newRepository, setNewRepository] = useState('');
  const [error, setError] = useState('');

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!newRepository.trim()) {
        setError('please, write a repository name');
        return;
      }

      const onSearchRepo = async () => {
        const response = await api.searchRepo(newRepository);

        if (response.error) {
          setError(response.error);
          return;
        }
        const repo = {
          name: response.full_name,
          id: response.id,
          language: response.language,
        };

        setRepositories([...repositories, repo]);
        setNewRepository('');
      };

      onSearchRepo();
    },
    [newRepository, repositories]
  );

  const onChangeInput = (e) => {
    setNewRepository(e.target.value);
    setError('');
  };

  useEffect(() => {
    console.log(repositories);
  }, [repositories]);

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
