import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --gray-800: #1E2022;
    --purple-700: #302E53;
    --yellow-600: #D07017;
    --white: #FFFFFF;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-800);
    color: var(--yellow-600);
  }

  body, input, textarea, button, select {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`