import React, { useCallback, useState } from 'react';
import { FaPlus, FaSpinner } from 'react-icons/fa';
import { useTheme } from 'src/hooks/useTheme';
import api from 'src/services/api';
import { Container, Form, SubmitButton } from './styles';

const Home = () => {
  const { dark } = useTheme();
  const [repositories, setRepositories] = useState([]);
  const [newRepository, setNewRepository] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!newRepository.trim()) {
        setError('please, write a repository name');
        return;
      }

      setLoading(true);

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
        setLoading(false);
      };

      onSearchRepo();
    },
    [newRepository, repositories]
  );

  const onChangeInput = (e) => {
    setNewRepository(e.target.value);
    setError('');
  };

  const SubmitButtonIcon = loading ? FaSpinner : FaPlus;

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
        <SubmitButton type="submit" loading={loading} disabled={loading}>
          <SubmitButtonIcon size={20} color="#fff" />
        </SubmitButton>
      </Form>
      {!!error && <span>{error}</span>}
    </Container>
  );
};

export default Home;
