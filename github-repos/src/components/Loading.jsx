import { FaSpinner } from 'react-icons/fa';
import { Container } from './Loading.styles';

const Loading = () => {
  return (
    <Container>
      <FaSpinner size={70} color="#1b7dec" />
    </Container>
  );
};

export default Loading;
