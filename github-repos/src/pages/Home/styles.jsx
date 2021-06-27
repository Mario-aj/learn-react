import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 16px 32px;

  background-color: ${({ dark }) => (dark ? '#0d2636' : '#fff')};
  color: ${({ dark }) => (dark ? '#fff' : '#0d2636')};

  border-radius: 4px;

  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const Form = styled.form`
  width: 100%;

  input {
    width: 80%;
    padding: 8px 16px;
    border: 1px solid #ddd;

    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    color: #2a2a2a;
    font-size: 16px;
  }
`;
export const SubmitButton = styled.button`
  padding: 6px 16px;
  background: #0d2636;
  border: 2px solid #0d2636;

  color: #fff;
  font-size: 18px;

  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
`;
