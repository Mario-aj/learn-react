import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  pointer-events: none;

  transition: all 0.3s ease-in-out;

  &.open {
    opacity: 1;
    pointer-events: visible;
  }

  &.open > div {
    transform: translateY(0);
  }
`;

export const ModalContent = styled.div`
  background: #fff;
  transform: translateY(-200px);
  transition: all 0.3s ease-in-out;

  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 16px;
`;

export const ModalHeader = styled.div`
  position: relative;
  padding: 8px;
  margin-bottom: 32px;

  button {
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    font-size: 24px;
    border: 0;
    border-radius: 50%;
    padding: 4px 12px;

    cursor: pointer;
    color: rgba(0, 0, 0, 0.7);
    opacity: 0.7;
    transition: opacity 0.4s;

    &:hover {
      opacity: 1;
    }
  }
`;
