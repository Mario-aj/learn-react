import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 1rem 10rem;
  margin: 0 auto;

  button {
    background: var(--blue-light);
    color: #fff;
    border: 0;
    padding: 0rem 1rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    height: 2rem;
    transition: filter 0.4s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
