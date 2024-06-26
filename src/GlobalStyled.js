import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }

  html{
    width: auto;
  }

  body{
    max-width: 100vw;
    max-height: 100vw;
    background-color: #161618;
  }
`;