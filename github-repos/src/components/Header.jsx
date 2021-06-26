import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';
import { Container, Content, Title } from './Header.styles';

const Header = () => {
  const { dark, onChangeTheme } = useTheme();
  const ToggleIcon = dark ? FaToggleOn : FaToggleOff;

  return (
    <Container>
      <Content>
        <Title>Github-repos</Title>
        <ToggleIcon size={40} onClick={onChangeTheme} />
      </Content>
    </Container>
  );
};

export default Header;
