import styled from 'styled-components';

export const MovieRow = styled.div`
  margin-bottom: 1.875rem;

  h2 {
    margin: 0 0 0 1.875rem;
  }
`;

export const ListArea = styled.div`
  overflow-x: hidden;
  padding-left: 1.875rem;
`;

export const List = styled.div`
  width: 99999999999px;

  div {
    display: inline-block;
    width: 9.375rem;

    img {
      width: 100%;
      cursor: pointer;
      transform: scale(0.9);
      transition: all 0.6s;
    }

    img:hover {
      transform: scale(1);
    }
  }
`;
