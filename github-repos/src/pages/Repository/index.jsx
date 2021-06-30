import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Loading from 'src/components/Loading';
import Issues from 'src/components/Issues';
import api from 'src/services/api';

import { Container, Owner, BackButton } from './styles';

const Repository = () => {
  let { repositoryName } = useParams();
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);

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

      <Issues issues={issues} />
    </Container>
  );
};

export default Repository;
