import styled from 'styled-components';

export const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
  
    li {
        height: 40vh;
        flex-grow: 1;

        @media (max-aspect-ratio: 1/1) {
            height: 30vh;
        }

        @media (max-height: 480px) {
            height: 80vh;
        }
    }

    li:last-child {
        flex-grow: 10;
    }

    img {
        max-height: 100%;
        min-width: 100%;
        object-fit: cover;
        vertical-align: bottom;
    }

    @media (max-aspect-ratio: 1/1) and (max-width: 480px) {
        ul {
            flex-direction: row;
        }

        li {
            height: auto;
            width: 100%;
        }
        img {
            width: 100%;
            max-height: 75vh;
            min-width: 0;
        }
    }
`;