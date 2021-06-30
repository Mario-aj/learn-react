import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.h1`
  background: #fff;
  color: #2a2a2a;

  padding: 16px;
  margin: 0 auto;

  max-width: 750px;

  border-radius: 4px;
  box-sizing: border-box;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 16px;

  img {
    width: 150px;
    border-radius: 50%;
    margin-bottom: 16px;
  }

  h1 {
    font-size: 32px;
    line-height: 42px;
  }

  p {
    font-size: 14px;
    font-weight: normal;
    line-height: 26px;
    text-align: center;
  }
`;

export const BackButton = styled(Link)`
  text-decoration: none;
  outline: none;
  margin: 0;

  svg {
    margin: 0;
  }
`;
