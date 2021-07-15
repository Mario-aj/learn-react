import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo__dtmoney" />
        <button type="button">New transaction</button>
      </Content>
    </Container>
  );
};
