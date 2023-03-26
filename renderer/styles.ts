import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  .navitem {
    padding: 3px 10px;
  }
  .navitem.is-active {
    background-color: #eee;
  }
`;
