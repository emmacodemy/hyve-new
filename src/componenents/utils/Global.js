import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";
import { defaultTheme, tablets, typeScale } from ".";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html {
        font-size: 16px;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: ${primaryFont};
        color: ${defaultTheme.textColor};
        font-weight: 400;
        border: 0 solid #dae1e7;
    }

    h1,h2,h3,h4,h5 {
        font-family: ${defaultTheme.HeaderFont};
        color: ${defaultTheme.headerText};
    }

    h1 {
        font-size: ${typeScale.header1};

        ${tablets} {
            font-size: ${typeScale.largeHeader};
        }
    }

    h2 {
        font-size: ${typeScale.header2};
    }

    h3 {
        font-size: ${typeScale.header3};
    }

    h4 {
        font-size: ${typeScale.header4};
    }

    h5 {
        font-size: ${typeScale.header5};
    }

    img {
    border-style: solid;
    max-width: 100%;
    height: auto;
    }
`;
