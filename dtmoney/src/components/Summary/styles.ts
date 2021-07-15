import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -6rem;

  div {
    background: var(--shape);

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 1.5rem 2rem;
    border-radius: 0.25rem;

    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 1.5rem;
      }
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-family: 500;
      font-size: 2rem;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`;
