import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  height: 66px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => (props.darkMode ? '#fff' : '#2a2a2a')};

  margin-bottom: 16px;
  transition: all 0.6s;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 860px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const Anchor = styled(Link)`
  color: ${props => (props.darkMode ? '#2a2a2a' : '#fff')};

  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.6s;
`;
