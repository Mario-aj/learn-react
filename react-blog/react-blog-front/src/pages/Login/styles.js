import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 16px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-bottom: 24px;
`;

export const Label = styled.label`
  margin-bottom: 4px;

  font-size: 1.3rem;
  font-weight: bold;
`;

export const Input = styled.input`
  border: 1px solid #2a2a2a;
  padding: 8px 16px;
  width: 100%;
  border-radius: 4px;
  font-size: 14px;
  color: #2a2a2a;
`;

export const SubmitButton = styled.button`
  color: #2a2a2a;
  background-color: #fff;
  width: 100%;
  height: 36px;
  border-radius: 4px;

  font-size: 1.3rem;
  font-weight: bold;

  cursor: pointer;
  transition: all 0.6s;

  &:hover {
    color: #fff;
    background-color: #999;
  }
`;

export const Achor = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
  display: block;
  text-align: center;
  margin-top: 8px;
`;
