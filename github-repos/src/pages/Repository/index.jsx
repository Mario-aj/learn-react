import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Loading from 'src/components/Loading';
import Issues from 'src/components/Issues';
import api from 'src/services/api';

import { Container, Owner, BackButton, ButtonAction } from './styles';

const Repository = () => {
  let { repositoryName } = useParams();
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const load = async () => {
      const [repoInfo, issuesInfo] = await api.getRepoInfo(
        decodeURIComponent(repositoryName)
      );

      setIssues(issuesInfo);
      setRepository(repoInfo);
    };

    load();
  }, [repositoryName]);

  useEffect(() => {
    const loadIssues = async () => {};

    loadIssues();
  });

  const onPageChange = (action) =>
    setPage(action === 'previous' ? page - 1 : page + 1);

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
