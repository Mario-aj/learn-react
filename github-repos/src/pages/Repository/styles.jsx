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
    font-size: 16px;
    line-height: 26px;
    font-weight: normal;
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

export const IssuesList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #ddd;

  li {
    display: flex;
    align-items: center;
    padding: 12px 8px;

    & + li {
      margin-top: 8px;
    }

    img {
      width: 40px;
      height: 40px;
      border: 2px solid #0d2636;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 8px;

      p {
        font-size: 12px;
        color: #2a2a2a;
        margin-top: 4px;
      }
    }

    strong {
      font-size: 15px;
      a {
        color: #2a2a2a;
        text-decoration: none;

        transition: color 0.4s;

        &:hover {
          color: #0071db;
        }
      }

      span {
        font-size: 10px;
        padding: 4px 6px;
        background: #0d2636;
        color: #fff;
        border-radius: 4px;
        font-weight: 600;

        margin-left: 6px;
      }
    }
  }
`;
