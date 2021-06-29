import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Loading from 'src/components/Loading';
import api from 'src/services/api';

import { Container, Owner, BackButton, IssuesList } from './styles';

const Repository = () => {
  let { repositoryName } = useParams();
  const [repository, setRepository] = useState({});
  const [isues, setIssues] = useState([]);

  useEffect(() => {
    const load = async () => {
      const [repoInfo, issuesInfo] = await api.getRepoInfo(
        decodeURIComponent(repositoryName)
      );
      console.log(repoInfo);
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

      <IssuesList>
        {isues.map((issue) => (
          <li key={issue.id}>
            <img src={issue.user.avatar_url} alt="issue" />

            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>
                {issue.labels.map((label) => (
                  <span key={label.id}>{label.name}</span>
                ))}
              </strong>

              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>
    </Container>
  );
};

export default Repository;
