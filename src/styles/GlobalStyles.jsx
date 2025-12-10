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
        }
`;

export default GlobalStyles;