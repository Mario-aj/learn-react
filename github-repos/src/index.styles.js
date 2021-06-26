import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    list-style: none;
    text-decoration: none;

    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }
  html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }

  body {
    background: #0D2636;
    color: #fff;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
  }

  input, button {
    border-radius: 4px;
  }

`;
