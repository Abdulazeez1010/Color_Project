import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    .fade-exit {
        opacity: 1;
    }

    .fade-exit-active {
        opacity: 0;
        transition: opacity 500ms ease-out;
    }

    .page {
        height: 100vh;
        position: fixed;
        width: 100%;
        top: 0;
        transition: opacity 0.5s ease-in-out;
    }

    .page-enter {
        opacity: 0;
    }

    .page-enter-active {
        opacity: 1;
    }

    .page-exit-active {
        opacity: 0;
    }

    html, body, #root {
        minHeight: 100%;
        margin: 0;
    }
`;

export default GlobalStyles;