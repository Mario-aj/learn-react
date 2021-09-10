import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-image: url(${({ backdropUrl }) => backdropUrl || ''});
`;

export const VerticalShadow = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const HorizontalShadow = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
`;
