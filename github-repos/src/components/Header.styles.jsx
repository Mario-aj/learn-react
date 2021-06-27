import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 66px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 32px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 860px;

  height: 100%;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }
`;

export const Title = styled.strong`
  font-size: 24px;
  color: #e05656;
`;

export const Toggle = styled.div``;
