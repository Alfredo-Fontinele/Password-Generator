import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: none;
        font-family: 'Poppins', sans-serif;
    }

    body {
        min-height: 100vh;
        background-color: rgb(20,30,40);
    }
`