// import { Link } from 'react-router-dom';
import { Container, Content, Anchor } from './styles';

const Header = ({ name }) => {
  const props = {
    href: name ? '/dashboard' : '/login',
    title: name ? name : 'Entrar',
  };

  return (
    <Container>
      <Content>
        <Anchor to="/">Programmer's Blog</Anchor>
        <Anchor to={props.href}>{props.title}</Anchor>
      </Content>
    </Container>
  );
};

export default Header;
