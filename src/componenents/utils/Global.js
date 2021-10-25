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
    max-width: 100%;
    height: auto;
    }

    .shadowed-title {
        font-size: 30px;
        font-weight: 700;
        position: relative;
        z-index: 10;
        margin-bottom: 20px;
        padding-top: 16px;
        margin-top: 20px;
        color: ${defaultTheme.headerText};
        overflow: hidden;
        text-align: center;

        &::after {
            font-size: 48px;
            font-weight: 700;
            line-height: 1;
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            white-space: nowrap;
            color: #f4f5f6;
            content: attr(data-text);
            bottom: -2px;
            z-index: -1;
            margin-left: -50%;
            margin-right: -50%;
        }
        
    }

    p {
        line-height: 1.5;
        font-weight: 400;
        font-size: 1rem;
        color: ${defaultTheme.textColor};
    }

    .center-text {
        text-align: center;
    }

    block {
      display: block;
    }

    @keyframes fadeIn {
      from {
        opacity: 0; 
        transform: translateX(-20px);
      }

      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .fadeIn {
        animation: fadeIn 2s backwards;
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
      }

      to {
        opacity: 0;
      }
    }

    .fadeOut {
      animation-name: fadeOut;
    }

    .fade-move {
      transition: transform .3s ease-out;
    }
`;
