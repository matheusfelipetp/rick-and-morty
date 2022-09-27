import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pangolin', cursive;
  }

  body {
    background: #1e1f43;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btnContainer {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }

  .container {
    max-width: 1320px;
    margin: 0 auto;
  }
`;
