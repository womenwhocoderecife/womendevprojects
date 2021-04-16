import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    
    html, body {
        width: 100%;
        height: 100%;
    }
    
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
`;
