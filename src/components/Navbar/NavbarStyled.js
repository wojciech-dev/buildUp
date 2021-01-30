import styled, { css } from 'styled-components';
import logo_img from 'assets/images/logo.png';

export const Height = styled.div`
  width: 100%;
  height: 71px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: ${({ theme }) => theme.mainColor};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #ffffff;
  z-index: 2;

  .logo {
    display: block;
    width: 125px;
    height: 50px;
    background-image: url('${logo_img}');
    background-position: center center;
    background-repeat: no-repeat;
    text-indent: -9999em;
  }
`;

export const NavContainer = styled.div`
  .nav {
    display: flex;
    transition: .4s;

      a {
        color: #ffffff;
        text-decoration: none;
        letter-spacing: 0.06em;
        font-size: 0.875em;
        font-weight: bold;
        margin-left: 20px;
        transition: color .4s ease;

        &:hover, &.is-active{
          color: #000000;
        }
      }
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    visibility: hidden;
    background: ${({ theme }) => theme.mainColor};
    transition: opacity 0.5s ease;

    .nav {
      flex-direction: column;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      padding-left: 20px;

        a {
          &:not(:first-child) {
            margin-left: 0px;
          }
          font-size: 1.5em;
          margin-bottom: 20px;
          opacity: 0;
          transform: translate(-20px, -20px);
          transition: .4s;
          margin-left: 0px;

          ${createDelay()};
        }

        
    }
  }

`;


export const NavOpen = styled.label`
  @media screen and (max-width: 768px){
      position: fixed;
      right: 10px;
      top: 10px;
      display: block;
      width: 48px;
      height: 48px;
      cursor: pointer;
      border-radius: 50%;
      z-index: 1;

      i {
        display: block;
        width: 20px;
        height: 2px;
        background: #1f2227;
        border-radius: 2px;
        margin-left: 14px;
        background: #ffffff;

        &:nth-child(1) {
          margin-top: 16px;
        }

        &:nth-child(2) {
          margin-top: 4px;
          opacity: 1;
        }

        &:nth-child(3) {
          margin-top: 4px;
        }
      }
  }
`;


export const Input = styled.input`
&:checked {
  & + .nav-open {
    transform: rotate(45deg);
  
    i {
      transition: transform 0.2s ease;
  
      &:nth-child(1) {
        transform: translateY(6px) rotate(180deg);
      }
  
      &:nth-child(2) {
        opacity: 0;
      }
  
      &:nth-child(3) {
        transform: translateY(-6px) rotate(90deg);
      }
    }
  }

  & ~ .nav-container {
    visibility: visible;
    .nav {
      a {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}
`;

function createDelay() {
  let styles = '';

  for (let i = 0; i < 6; i++) {
    styles += `
      &:nth-child(${i + 1}) {
        transition-delay: ${`${i * 0.1}s`};
      }
    `;
  }

  return css`${styles}`;
}