import React, { useCallback, useEffect, useState } from 'react';
import { FaPlus, FaSpinner } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useTheme } from 'src/hooks/useTheme';
import api from 'src/services/api';
import ListRepos from 'src/components/ListRepos';
import { Container, Form, SubmitButton } from './styles';

const Home = () => {
  const { dark } = useTheme();
  const history = useHistory();
  const [repositories, setRepositories] = useState([]);
  const [newRepository, setNewRepository] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const repoStoraged = localStorage.getItem('repos');

    if (repoStoraged) {
      setRepositories(JSON.parse(repoStoraged));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(repositories));
  }, [repositories]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!newRepository.trim()) {
        setError('please, write a repository name');
        return;
      }

      const repoAlreadyExist = repositories.find(
        (repo) => repo.name === newRepository
      );

      if (repoAlreadyExist) {
        setError('This repository already exist in the list below');
        return;
      }

      setLoading(true);

      const onSearchRepo = async () => {
        const response = await api.searchRepo(newRepository);

        if (response.error) {
          setError(response.error);
          setLoading(false);
          return;
        }

        const repo = {
          name: response.full_name,
          id: response.id,
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

  const onRemoveRepo = useCallback(
    (repoId) => {
      setRepositories(repositories.filter((repo) => repo.id !== repoId));
    },
    [repositories]
  );

  const onDetailsRepo = useCallback(
    (repoName) => {
      history.push(`repository/${encodeURIComponent(repoName)}`);
    },
    [history]
  );

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
      {repositories.length >= 1 && (
        <ListRepos
          repos={repositories}
          onDetailsRepo={onDetailsRepo}
          onRemoveRepo={onRemoveRepo}
        />
      )}
    </Container>
  );
};

export default Home;
