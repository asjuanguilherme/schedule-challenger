import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      box-sizing: border-box;
   }

   html {
      font-family: 'Mulish', sans-serif;
   }
`

export default GlobalStyle