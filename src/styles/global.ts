import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background: ${props => props.theme.colors.background};
  }

  body, input, textarea, button {
    font: 14px Poppins, Archivo, sans-serif;
  }

  a {
    text-decoration: none !important;
  }

  ul {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
