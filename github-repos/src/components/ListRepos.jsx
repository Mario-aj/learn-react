import React from 'react';
import { FaTrash, FaBars } from 'react-icons/fa';
import { List, IconContent } from './ListRepos.styles';

const ListRepos = ({ repos, removeRepo }) => {
  return (
    <List>
      {repos.map((repo) => (
        <li key={repo.id}>
          <span>{repo.name}</span>

          <IconContent>
            <FaTrash
              size={16}
              color="#ff0000"
              onClick={() => removeRepo(repo.id)}
            />
            <FaBars size={16} color="#0d2636" />
          </IconContent>
        </li>
      ))}
    </List>
  );
};

export default ListRepos;
