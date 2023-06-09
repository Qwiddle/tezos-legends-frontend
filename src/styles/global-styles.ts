import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Inter', Helvetica, Arial, sans-serif;

  }

  #root {
    min-height: 100%;
    min-width: 100%;
    background: ${p => p.theme.backgroundGradient};
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
