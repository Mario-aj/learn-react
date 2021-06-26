import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { useTheme } from '../Hooks/useTheme';
import { Container, Content, Title } from './Header.styles';

const Header = () => {
  const { dark_theme, updateTheme } = useTheme();

  return (
    <Container>
      <Content>
        <Title>Github-repos</Title>
        {dark_theme ? (
          <FaToggleOn size={40} onClick={updateTheme} />
        ) : (
          <FaToggleOff size={40} onClick={updateTheme} />
        )}
      </Content>
    </Container>
  );
};

export default Header;
