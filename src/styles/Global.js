import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        /* background-color: #117F95; */
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`

export default GlobalStyles;