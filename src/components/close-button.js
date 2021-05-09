import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ButtonContainer = styled.button`
   z-index: 3;
   box-sizing: border-box;
   position: fixed;
   width: 32px;
   height: 32px;
   background-color: var(--white-2);
   border-radius: 50%;
   border: none;
   box-shadow: 0 0 4px rgba(28, 28, 28, 0.35);
   top: 24px;
   right: 24px;
   transition: box-shadow 0.25s, transform 0.25s;

   &:hover {
      box-shadow: 0 2px 8px rgba(28, 28, 28, 0.55);
      transform: scale(1.05);
   }

   &:active {
      box-shadow: 0 0 4px rgba(28, 28, 28, 0.35);
      transform: scale(1);
   }

   @media screen and (min-width: 1024px) {
      width: 40px;
      height: 40px;
      top: 32px;
      right: 32px;
   }

   @media screen and (min-width: 1440px) {
      width: 48px;
      height: 48px;
      top: 40px;
      right: 40px;
   }
`

const CloseIcon = styled.svg`
   margin-top: 2px;
   width: 12px;
   height: 12px;

   @media screen and (min-width: 1024px) {
      width: 16px;
      height: 16px;
   }

   @media screen and (min-width: 1440px) {
      width: 20px;
      height: 20px;
   }

`

const CloseButton = () => (
   <ButtonContainer>
      <Link to="/">
         <CloseIcon viewBox="0 0 24 24" fill="none">
            <path d="M0.568224 3.31185C-0.189407 2.55422 -0.189407 1.32586 0.568224 0.568224C1.32586 -0.189408 2.55422 -0.189408 3.31185 0.568224L23.4318 20.6881C24.1894 21.4458 24.1894 22.6741 23.4318 23.4318C22.6741 24.1894 21.4458 24.1894 20.6882 23.4318L0.568224 3.31185Z" fill="#1D1D1D"/>
            <path d="M20.6882 0.568224C21.4458 -0.189408 22.6741 -0.189407 23.4318 0.568224C24.1894 1.32586 24.1894 2.55422 23.4318 3.31185L3.31185 23.4318C2.55422 24.1894 1.32586 24.1894 0.568224 23.4318C-0.189408 22.6741 -0.189408 21.4458 0.568224 20.6881L20.6882 0.568224Z" fill="#1D1D1D"/>
         </CloseIcon>
      </Link>
   </ButtonContainer>
)

export default CloseButton
