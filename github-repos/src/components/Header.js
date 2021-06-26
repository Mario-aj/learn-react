import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';
import { Container, Content, Title } from './Header.styles';

const Header = () => {
  const { dark_theme, onChangeTheme } = useTheme();

  return (
    <Container>
      <Content>
        <Title>Github-repos</Title>
        {dark_theme ? (
          <FaToggleOn size={40} onClick={onChangeTheme} />
        ) : (
          <FaToggleOff size={40} onClick={onChangeTheme} />
        )}
      </Content>
    </Container>
  );
};

export default Header;
