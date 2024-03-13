import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  font-size: 62.5%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
  }

  body {
    background-color : ${props => props.theme['gray-800']};
    color: ${props => props.theme['gray-100']};
    -webkit-font-smoothing: antiaoiased;
  }

  body, input, textarea, button {
    font: 400 1.6rem 'Roboto', sans-serif;
  }
`