import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Loading from 'src/components/Loading';
import Issues from 'src/components/Issues';
import api from 'src/services/api';

import {
  Container,
  Owner,
  BackButton,
  ButtonAction,
  ButtonState,
} from './styles';

const Repository = () => {
  let { repositoryName } = useParams();
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [filterIndex, setFilterIndex] = useState(0);
  const filters = [
    { state: 'all', label: 'All', active: true },
    { state: 'open', label: 'Open', active: false },
    { state: 'closed', label: 'Closed', active: false },
  ];

  useEffect(() => {
    const load = async () => {
      const [repoInfo, issuesInfo] = await api.getRepoInfo({
        repos: decodeURIComponent(repositoryName),
        state: filters.find((filter) => filter.active).state,
      });

      setIssues(issuesInfo);
      setRepository(repoInfo);
    };

    load();
  }, [repositoryName, filters]);

  useEffect(() => {
    const loadIssues = async () => {
      const repo = decodeURIComponent(repositoryName);
      const response = await api.loadIssuesPerPage({
        repo,
        page,
        status: filters[filterIndex].state,
      });
      setIssues(response);
    };

    loadIssues();
  }, [page, repositoryName, filterIndex, filters]);

  const onPageChange = (action) =>
    setPage(action === 'previous' ? page - 1 : page + 1);

  const onStatechange = (index) => setFilterIndex(index);

  if (Object.values(repository).length === 0) return <Loading />;

  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft size={20} color="#0d2636" />
      </BackButton>
      <Owner>
        <img src={repository.owner.avatar_url} alt="avatar" />
        <h1>{repository.owner.login}</h1>
        <p>{repository.description}</p>
      </Owner>

      <ButtonState active={filterIndex}>
        {filters.map((filter, index) => (
          <button
            type="button"
            key={filter.state}
            onClick={() => onStatechange(index)}
          >
            {filter.label}
          </button>
        ))}
      </ButtonState>

      {issues.length > 0 && (
        <>
          {' '}
          <Issues issues={issues} />
          <ButtonAction>
            <button
              type="button"
              disabled={page < 2}
              onClick={() => onPageChange('previous')}
            >
              previous
            </button>

            <button type="button" onClick={() => onPageChange('next')}>
              next
            </button>
          </ButtonAction>
        </>
      )}
    </Container>
  );
};

export default Repository;
