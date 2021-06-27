import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 16px 32px;

  background-color: ${({ dark }) => (dark ? '#0d2636' : '#fff')};
  color: ${({ dark }) => (dark ? '#fff' : '#0d2636')};

  border-radius: 4px;

  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    margin-top: 4px;
    color: red;
    font-size: 13px;
  }

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  input {
    flex: 1;
    padding: 8px 16px;
    border: 1px solid ${({ error }) => (error ? '#ff0000' : '#ddd')};

    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    color: #2a2a2a;
    font-size: 16px;
  }
`;

const buttonAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button`
  padding: 6px 16px;
  background: #0d2636;
  border: 2px solid #0d2636;

  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${({ loading }) =>
    loading &&
    css`
      svg {
        animation: ${buttonAnimation} 1s linear infinite;
      }
    `}
`;
