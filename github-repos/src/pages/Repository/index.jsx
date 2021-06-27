import React from 'react';
import { useParams } from 'react-router-dom';

import { Title } from './styles';

const Repository = () => {
  const params = useParams();
  const repositoryId = decodeURIComponent(params.repositoryId);

  return <Title>{repositoryId}</Title>;
};

export default Repository;
