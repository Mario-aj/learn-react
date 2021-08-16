import logo from "../../assets/logo.svg";
import { useModal } from "../../context/modal-context";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenModal: () => void;
}

export const Header = ({ onOpenModal }: HeaderProps) => {
  const { setIsOpen } = useModal();

  return (
    <Container>
      <Content>
        <img src={logo} alt="logo__dtmoney" />
        <button type="button" onClick={() => setIsOpen(false)}>
          New transaction
        </button>
      </Content>
    </Container>
  );
};
