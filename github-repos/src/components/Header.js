import React, { useState } from 'react';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';

import { Container, Content, Title } from './Header.styles';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const onToggle = () => setDarkMode(!darkMode);

  return (
    <Container>
      <Content>
        <Title>Github-repos</Title>
        {darkMode ? (
          <FaToggleOn size={40} onClick={onToggle} />
        ) : (
          <FaToggleOff size={40} onClick={onToggle} />
        )}
      </Content>
    </Container>
  );
};

export default Header;
