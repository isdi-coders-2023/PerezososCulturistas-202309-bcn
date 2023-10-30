import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.typography.mainFont};
  }

  body {
    margin: 0;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.main};
  }

  h1, h2 {
    margin-top: 0;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  dl, dd {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
    font: inherit;
    color: inherit;
    background: none;
    border: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    font: inherit
  }

  img {
    max-width: 100%
  }
`;

export default GlobalStyle;
