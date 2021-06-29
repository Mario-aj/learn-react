import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    animation: ${animation} 1s linear infinite;
  }
`;
