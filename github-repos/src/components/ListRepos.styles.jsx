import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-top: 32px;

  li {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;

    span {
      color: #0d2636;
      font-size: 14px;
      font-weight: bold;
    }

    & + li {
      border-top: 1px solid #ddd;
      padding-top: 8px;
    }
  }
`;

export const IconContent = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;

    transition: transform 0.4s;

    & + svg {
      margin-left: 8px;
    }

    &:hover {
      transform: translateY(-4px);
    }
  }
`;
