import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
  *{
    margin: 0;
  padding: 0;
  border: none;

  box-sizing: border-box;
  }

  html {
    font-size: 90%;
    color: ${props => (props.darkMode ? '#fff' : '#2a2a2a')};

    transition: all 0.6s;
  }


  body {
   background: ${props => (props.darkMode ? '#2a2a2a' : '#fff')};
   transition: all 0.6s;

  }

  @media(max-width: 450px) {
    html {
      font-size: 70%;
    }
  }

  @media(max-width: 768px) {
    html {
      font-size: 75%;
    }
  }

  @media(max-width: 1024px) {
    html {
      font-size: 80%;
    }
  }

`;

export default globalStyles;
