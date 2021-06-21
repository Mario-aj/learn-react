import { Container, Content, Anchor } from './styles';

const Header = ({ name, darkMode }) => {
  const props = {
    href: name ? '/dashboard' : '/login',
    title: name ? name : 'Entrar',
  };

  return (
    <Container darkMode={darkMode}>
      <Content>
        <Anchor to="/" darkMode={darkMode}>
          Programmer's Blog
        </Anchor>
        <Anchor to={props.href} darkMode={darkMode}>
          {props.title}
        </Anchor>
      </Content>
    </Container>
  );
};

export default Header;
