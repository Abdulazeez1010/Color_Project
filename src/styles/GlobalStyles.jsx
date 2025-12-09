import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    .fade-exit {
        opacity: 1;
    }

    .fade-exit-active {
        opacity: 0;
        transition: opacity 500ms ease-out;
    }
`;

export default GlobalStyles;