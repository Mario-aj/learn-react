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

export const ButtonAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 8px;
  padding: 8px 16px;
  border-top: 1px solid #ddd;

  button {
    background: #0d2636;
    color: #fff;
    padding: 6px 0;
    border-radius: 4px;

    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

export const ButtonState = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0 0 16px;

  button {
    padding: 4px 0;
    width: 55px;
    background: #ddd;

    display: flex;
    align-items: center;
    justify-content: center;

    & + button {
      margin-left: 8px;
    }

    &:nth-child(${({ active }) => active + 1}) {
      background: #0074db;
      color: #fff;
    }
  }
`;
