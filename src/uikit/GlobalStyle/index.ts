import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import InterRegular from 'fonts/inter-regular.woff2'
import InterBlack from 'fonts/inter-black.woff2'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url(${InterRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    src: url(${InterBlack}) format('woff2');
  }
`
