import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #fff;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

export const Title = styled.strong`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const Author = styled.span`
  font-size: 1.1rem;
`;

export const Image = styled.img`
  border-radius: 4px;
  width: 100%;
  margin: 8px 0;
`;

export const Description = styled.footer`
  margin-top: 8px;
  font-size: 1.1rem;
  line-height: 1.5rem;
  word-wrap: break-word;
  text-align: justify;
`;
