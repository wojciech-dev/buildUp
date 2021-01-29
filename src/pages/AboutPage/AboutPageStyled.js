import styled from 'styled-components';

export const AboutMore = styled.div`
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    margin: 100px 0px;

    @media screen and (max-width: 1200px) {
        padding: 20px;
        justify-content: center;
    }


    .AboutPage_name {
        width: 100%;
        text-align: left;
        font-weight: bold;
        font-size: 2.3em;
        margin-bottom: 20px;
        color: ${({ theme }) => theme.mainColor};
        transform: translate(px, 130px);

        @media screen and (max-width: 1200px) {
            transform: none;
        }
    }

    .AboutPage_photo{
        max-width: 360px;
        margin-right: 30px;
        margin-bottom: 20px;

        @media screen and (max-width: 768px) {
            margin: 0px 0 20px 0px;
        }

        .AboutPage_img {
            width: 100%;
        }
    }

    .AboutPage_text {
        width: 360px;
        position: relative;
        height: 430px;
        display: flex;
        align-items: center;

        @media screen and (max-width: 1200px) {
            height: auto;
            width: 100%;
            text-align: center;
        }

        &-body {
            background: #ffffff;
            padding: 30px;
            border: 2px solid ${({ theme }) => theme.borderColor};
            line-height: 1.6;
            transform: translate(-90px);
            @media screen and (max-width: 1200px) {
                transform: none;
            }
        }

        &-header {
            font-weight: bold;
            font-size: 2.3em;
            margin-bottom: 20px;
            color: ${({ theme }) => theme.headerCard};
        }
    }
`;
