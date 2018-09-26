/* eslint-disable no-unused-vars */

import { createGlobalStyle } from 'styled-components';
import colors from '../colors';

/* Specify / Override global style
  https://www.styled-components.com/docs/api#createglobalstyle
*/
/* 1. Set default body background color to white */
/* 2. Set box-sizing to border-box on all elements */
/* 3. Set font-family to paragraph and headings */
/* 4. Set max-width to 100% on img */
/* 5. Include GlobalStyle in App */

export default createGlobalStyle`
  body {
    background-color: papayawhip;
  }
}`;
