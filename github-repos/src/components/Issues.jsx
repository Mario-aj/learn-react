import { IssuesList } from './Issues.styles';

const Issues = ({ issues }) => {
  return (
    <IssuesList>
      {issues.map((issue) => (
        <li key={issue.id}>
          <img src={issue.user.avatar_url} alt="issue" />

          <div>
            <strong>
              <a href={issue.html_url} target="_blank" rel="noreferrer">
                {issue.title}
              </a>
              {issue.labels.map((label) => (
                <span key={label.id}>{label.name}</span>
              ))}
            </strong>

            <p>{issue.user.login}</p>
          </div>
        </li>
      ))}
    </IssuesList>
  );
};

export default Issues;
