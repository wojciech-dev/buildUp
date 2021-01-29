import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    animation-name: fadeIn;
    animation-duration: .4s;
    transition-timing-function: ease-in;
    animation-fill-mode: both;

    @media screen and (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

export const Box = styled.div`
    width: 100%;
    height: 221px;
    background: cadetblue;
    position: relative;
    overflow: hidden;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: right;
    padding: 20px;

    @media screen and (max-width: 560px) {
        text-align: left;
    }

    .title {
        font-weight: bold;
        font-size: 1.875em;
        margin-bottom: 20px;
        color: ${({ theme }) => theme.headerColor};
    }

    .btn {
        text-decoration: none;
        border: none;
        color: #4b99a5;
        background-color: transparent !important;
        background-image: none;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.875rem;
        border-bottom: 2px solid #4b99a5;
        cursor: pointer;

        &:hover {
            border-width: 0px;
            color: #000000;
        }

    }
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`;

