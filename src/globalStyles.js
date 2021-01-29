import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        line-height: 1;
        font-family: 'Montserrat', sans-serif;
        font-size: 1em;
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }

    a {
        outline: none;
    }

    .wrapper {
        position: relative;
        width: 1140px;
        margin: 0 auto;
        z-index: 1;

        @media screen and (max-width: 1200px) {
            width: 100%;
        }
    }

    .padding {
        padding: 40px;

        @media screen and (max-width: 1200px) {
            padding: 20px;
        }
    }

    .switch-wrapper {
        position: relative;
    }

    .switch-wrapper > div {
        position: absolute;
    }
`;