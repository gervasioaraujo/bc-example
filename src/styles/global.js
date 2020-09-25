import { createGlobalStyle } from 'styled-components';

// * {
//   box-sizing: border-box;
//   padding: 0;
//   margin: 0;
//   outline: 0;
// }
// body, html {
//   background: #eee;
//   font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
//   text-rendering: optimizeLegibility !important;
//   -webkit-font-smoothing: antialiased !important;
//   height: 100%;
//   width: 100%;
// }
export const GlobalStyle = createGlobalStyle`
:root {
  --color-background: #f0f0f7;
  --color-primary: #8257e5;
  --color-secondary: #04bf58;
  --color-text-title: #2E2E2E;

  --color-title-in-primary: #ffffff;
  --color-text-in-primary: #d4c2ff;

  --color-text-complement: #9c98a6;
  --color-text-base: #6a6180;

  --color-text-error: #d63031;
  --color-background-error: #fab1a0;
  --color-text-info: #2e86de;
  --color-background-info: #dff9fb;
  --color-line-in-white: #e6e6f0;
  --color-input-background: #f8f8fc;
  --color-button-text: #ffffff;
  --color-box-base: #ffffff;
  --color-box-footer: #fafafc;
  --color-small-info: #c1bccc;
  font-size: 60%; /* controle das medidas rem */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  height: 100vh;
}
body {
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;
