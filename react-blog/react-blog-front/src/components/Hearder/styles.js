import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  height: 66px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 860px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const Anchor = styled(Link)`
  color: #2a2a2a;

  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;
