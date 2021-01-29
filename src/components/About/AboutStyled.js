import styled from 'styled-components';
import bg from 'assets/images/about.jpg';

export const Background = styled.div`
  background-image: url('${bg}');
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 1024px) {
      height: auto;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 15px 15px;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 1024px) {
      display: block;
      height: auto;
  }

  .about {
    background: #ffffff;
    line-height: 1.6;
    padding: 20px;
    text-align: center;

    @media screen and (max-width: 1024px) {
      margin-bottom: 20px;
    }

    &.about0 {
      background: none;
      text-align: left;
      grid-column-start: 1;
      grid-column-end: span 2;

      .about_title {
        font-size: 3.75em;
        font-weight: bold;
        line-height: normal;

        @media screen and (max-width: 1024px) {
          font-size: 1.8em;
        }
      }
    }

    &.about1 {
      background: none;
    }

    &_title {
      font-size: 1.5em;
      margin-bottom: 20px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.mainColor};
      font-weight: bold;

      a{
        text-decoration: none;
        color: ${({ theme }) => theme.mainColor};

        &:hover {
          text-decoration: underline;
          color: #000000;
        }
      }
    }
  }
`;

export const Img = styled.img`
  margin-bottom: 20px;
`;