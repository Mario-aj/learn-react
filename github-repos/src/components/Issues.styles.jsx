import styled from 'styled-components';

export const IssuesList = styled.ul`
  margin-top: 16px;
  padding: 16px 16px;
  border-top: 1px solid #ddd;

  font-size: 15px;

  li {
    display: flex;
    align-items: center;

    & + li {
      margin-top: 16px;
      padding-top: 8px;
    }

    img {
      width: 45px;
      height: 45px;
      border: 2px solid #0d2636;
      border-radius: 50%;
      margin-right: 8px;
    }

    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      a {
        color: #2a2a2a;
        transition: color 0.4s;

        &:hover {
          color: #0960ac;
        }
      }

      span {
        background: #0d2636;
        padding: 4px 6px;
        color: #fff;
        border-radius: 4px;
        margin-left: 8px;

        font-size: 11px;
      }

      p {
        margin-top: 8px;
        font-size: 13px;
        color: #2a2a2a;
      }
    }
  }
`;
