import { useState } from 'react';
import { useHistory } from 'react-router';
import api from '../../services/api';
import {
  Container,
  Form,
  Field,
  Label,
  Input,
  SubmitButton,
  Achor,
} from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const onSubmit = async event => {
    event.preventDefault();
    try {
      if (!password.trim() || !email.trim())
        throw new Error('please, fill all fields');

      const response = await api.login(email, password);
      console.log(response);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Field>
          <Label>Email</Label>
          <Input
            placeholder="teste@87labs.com"
            type="email"
            autoFocus
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </Field>

        <Field>
          <Label>Email</Label>
          <Input
            placeholder="t*****e"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </Field>

        <SubmitButton type="submit">Sing in</SubmitButton>
      </Form>

      <Achor>Sign up here</Achor>
    </Container>
  );
};

export default Login;
