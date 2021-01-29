import styled from 'styled-components';

export const SlidShow = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
  
    .prev,
    .next {
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -29px;
      padding: 1rem;
      background: rgba(0,0,0, .3);
      font-size: 1.4rem;
      color: #ffffff;
      border: none;
      cursor: pointer;
      outline: none;
      transition: .4s;
      z-index: 1;
  
      &:hover{
        background: rgba(0,0,0, 1);
      }
  
      @media screen and (max-width: 560px) {
        padding: 5px;
        font-size: 12px;
      }
  
    }
  
    .next {
      left: auto;
      right: 0px;
    }
  
    .slide {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      height: 100vh;
      transition: opacity 4s 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      overflow-x: hidden;
  
      &.active {
        opacity: 1;
      }
  
      &__title,
      &__subtitle {
        z-index: 1;
        padding: 20px;
        text-align: center;
        color: #fff;
        text-transform: capitalize;
        transform-style: preserve-3d;
        transform: translateX(-400%);
        transition: transform 1s 0.3s cubic-bezier(0.95, 0.05, 0.795, 0.035);
      }
  
      &__title {
        font-size: 4vw;
        margin-bottom: 20px;
      }
  
      &__subtitle {
        font-size: 2vw;
        transition-delay: .6s;
      }
  
      &__image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
  
      &.active .slide__title,
      &.active .slide__subtitle {
        transform: translateX(0%);
      }
  
    }
  `;