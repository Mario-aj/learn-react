import React, { useCallback, useEffect, useState } from 'react';
import { FaPlus, FaSpinner } from 'react-icons/fa';
import { FiMic, FiMicOff } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useTheme } from 'src/hooks/useTheme';
import { useRecognition } from 'src/hooks/useRecognition';
import api from 'src/services/api';
import ListRepos from 'src/components/ListRepos';
import { Container, Form, SubmitButton } from './styles';

const Home = () => {
  const { dark } = useTheme();
  const { result, isListening, recognition } = useRecognition();
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

  const handleOnSubmit = useCallback(
    (repoName) => {
      if (!repoName?.trim()) {
        setError('please, write a repository name');
        return;
      }

      const repoAlreadyExist = repositories.find(
        (repo) => repo.name === repoName
      );
      console.log('exist: ', repoAlreadyExist);
      if (repoAlreadyExist) {
        setError('This repository already exist in the list below');
        return;
      }

      setLoading(true);

      const onSearchRepo = async () => {
        const response = await api.searchRepo(repoName);

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
    [repositories]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleOnSubmit(e.target[0].value);
    },
    [handleOnSubmit]
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

  useEffect(() => {
    const repo = result?.speech?.replaceAll(' ', '/');

    if (repo) {
      handleOnSubmit(repo);
      setNewRepository(repo);
      setError('');
    }
  }, [result.speech, handleOnSubmit]);

  const onRecognition = () => {
    const { error: recognitionError } = result;
    if (recognitionError) {
      setError(recognitionError);
      return;
    }

    isListening ? recognition.stop() : recognition.start();
  };

  const SubmitButtonIcon = loading ? FaSpinner : FaPlus;
  const Microphone = isListening ? FiMic : FiMicOff;

  return (
    <Container dak={dark}>
      <h1>My repositories</h1>

      <Form onSubmit={onSubmit} error={!!error}>
        <div>
          <input
            type="text"
            placeholder="Search repos"
            value={newRepository}
            onChange={onChangeInput}
          />
          <Microphone size={18} color="#0d2636" onClick={onRecognition} />
        </div>
        <SubmitButton
          type="submit"
          loading={loading}
          disabled={loading || isListening}
        >
          <SubmitButtonIcon size={18} color="#fff" />
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
