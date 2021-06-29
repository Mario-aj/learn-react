import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from 'src/components/Loading';
import api from 'src/services/api';

import { Container } from './styles';

const Repository = () => {
  let { repositoryName } = useParams();
  const [repository, setRepository] = useState({});
  const [isues, setIssues] = useState([]);

  useEffect(() => {
    const load = async () => {
      const [repoInfo, issuesInfo] = await api.getRepoInfo(
        decodeURIComponent(repositoryName)
      );
      console.log(repoInfo, issuesInfo);
      setIssues(issuesInfo);
      setRepository(repoInfo);
    };

    load();
  }, [repositoryName]);

  if (Object.values(repository).length === 0) return <Loading />;

  return <Container>{repository.full_name}</Container>;
};

export default Repository;
