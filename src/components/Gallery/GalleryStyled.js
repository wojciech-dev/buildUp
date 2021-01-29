import styled from 'styled-components';


export const Background = styled.div`
    width: 100%;
    background: #ededed;
    position: relative;
    box-shadow: 0px -1px 5px 0px rgba(50, 50, 50, .2);
    padding: 50px 0px;

    &::after{
        content:"";
        width: 100%;
        height: 340px;
        background: ${({ theme }) => theme.mainColor};
        position: absolute;
        top: 50%;
        left: 0px;
        margin-top: -170px;
    }
`;

export const GalleryContainer = styled.div`
    text-align: center;

    .gallery_header {
        text-align: center;
        color: ${({ theme }) => theme.headerColor};
        font-size: 4.5em;
        margin-bottom: 20px;

        @media screen and (max-width: 640px) {
            font-size: 1.9em;
        }
    }

    .gallery_text {
        margin-bottom: 40px;
        line-height: 1.6;
        text-align: center;
        color: #111111;
        font-style: italic;
    }

    .gallery_img {
        position: relative;
        margin-top: 100px;
        width: 100%;
        height: 500px;

        @media screen and (max-width: 768px) {
            height: auto;
        }
    }

    .gallery_img-1 {
        max-width: 500px;
        position: absolute;
        top: 0;
        left: 10%;
        margin-bottom: 20px;

        @media screen and (max-width: 768px) {
            position: relative;
            top: auto;
            left: auto;
        }

        @media screen and (max-width: 640px) {
            width: 100%;
            height: auto;
        }
    }

    .gallery_img-2 {
        max-width: 543px;
        position: absolute;
        top: -60px;
        right: 10%;

        @media screen and (max-width: 768px) {
            position: relative;
            top: auto;
            right: auto;
        }

        @media screen and (max-width: 640px) {
            width: 100%;
            height: auto;
        }
    }

    .gallery_btn{
        position: absolute;
        right: 0px;
        bottom: 0;
        border: none;
        border: 1px solid ${({ theme }) => theme.mainColor};
        padding: 10px 40px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.mainColor};
        transition: .4s;

        a {
            text-decoration: none;
            color: ${({ theme }) => theme.mainColor};
        }

        &:hover{
            background: #484848;
            color: #ffffff;
            cursor: pointer;
        }

        &:hover a {
            color: #ffffff;
        }

        @media screen and (max-width: 768px) {
            position: relative;
            right: auto;
            bottom: auto;
        }
    }


`;



