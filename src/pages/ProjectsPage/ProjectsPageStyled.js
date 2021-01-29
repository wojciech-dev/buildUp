import styled from 'styled-components';

export const Projects = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 200px 0 100px 0;

  @media screen and (max-width: 1200px) {
    padding-left: 20px;
    padding-right: 20px;
    display: block;
    margin: 100px 0 20px 0px;
  }

  .projects_content {
    line-height: 1.6;
    width: 50%;

    @media screen and (max-width: 1200px) {
      width: 100%;
      margin-bottom: 20px;
    }

    .projects_header {
      letter-spacing: 3px;
      line-height: 1;
      font-size: 4em;
      font-weight: bold;
      margin-bottom: 50px;

      @media screen and (max-width: 768px) {
        font-size: 2em;
      }
    }

    .projects_content-text {
      position: relative;
      padding-left: 180px;
      padding-right: 40px;

      @media screen and (max-width: 1200px) {
        padding: 0px;
      }

      &::before{
        content: "";
        width: 160px;
        height: 10px;
        background: ${({ theme }) => theme.mainColor};
        position: absolute;
        top: 7px;
        left: 0px;

        @media screen and (max-width: 1200px) {
          top: -15px;
        }
      }
    }
  }
`;

export const Photo = styled.div`
  background: ${({ theme }) => theme.mainColor};
  position: relative;
  padding-right: 80px;
  padding-bottom: 60px;

  @media screen and (max-width: 1200px) {
    padding: 0px;
    text-align: center;
    padding: 20px;
  }

  .photo_img {
    margin-top: -90px;
    margin-left: -90px;

    @media screen and (max-width: 1200px) {
      margin: 0px;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
`;