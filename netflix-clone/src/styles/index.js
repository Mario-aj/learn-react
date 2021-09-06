import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;

    box-sizing: border-box;
    border: none;
  }


  body {
    background: #111;
    color: #fff;
    font-family: -apple-system, Ubuntu, 'Segoe UI', Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html {
    font-size: 14px;
  }
`;
