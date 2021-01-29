import styled from 'styled-components';

export const Background = styled.div`
    background: ${({ theme }) => theme.mainColor};
`;

export const Contacts = styled.div`
    display: flex;
    width: 100%;
    color: #ffffff;
    align-items: center;
    justify-content: space-between;
    padding: 60px 20px;
    margin: 20px 0;
    animation-name: fadeIn;
    animation-duration: .4s;
    transition-timing-function: ease-in;
    animation-fill-mode: both;


    @media screen and (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }

    &:before{
        content:"";
        width: 300px;
        height: 100%;
        background: #ffffff;
        position: absolute;
        top: 0px;
        left: 50%;
        z-index: 1;
        transform: translate(-50%, 0);

        @media screen and (max-width: 768px) {
            background: transparent;
        }
    }

    .contact_adres,
    .contact_photo{
        font-size: 1.125em;
        position: relative;
        z-index: 2;

        @media screen and (max-width: 640px) {
            padding: 20px;
        }

        img {
            max-width: 627px;

            @media screen and (max-width: 640px) {
                width: 100%;
                height: auto;
            }
        }
    }

    .contact_text {
        line-height: 1.6;
        margin-bottom: 100px;
        
        @media screen and (max-width: 768px) {
            margin-bottom: 20px;
        }
    }

    .contact_header {
        line-height: 1.1;
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 4px;
        margin-bottom: 30px;
    }

    .contact_social {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 20px;

        @media screen and (max-width: 768px) {
            justify-content: space-around;
        }

        img {
            margin-right: 20px;

            @media screen and (max-width: 768px) {
                margin: 5px;
            }

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

export const Footer = styled.footer`
    width: 100%;
    background: #454545;
    text-align: center;
    color: #ffffff;
    padding: 10px 0px;
    font-size: 0.75em;
`;