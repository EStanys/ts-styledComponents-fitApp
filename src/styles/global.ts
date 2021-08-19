import { createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background-color: black;
    position: relative;
    padding-bottom: 70px;
    min-height: calc(100vh - 110px);  
  }

  #root {
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;
