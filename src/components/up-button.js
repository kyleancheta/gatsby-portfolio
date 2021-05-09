import React, { useState, useEffect } from "react"
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
   bottom: 24px;
   right: 24px;
   transition: box-shadow 0.25s, transform 0.25s;


   &[data-active="true"] {
      bottom: 200px;
   }

   &:hover {
      box-shadow: 0 2px 8px rgba(28, 28, 28, 0.55);
      transform: scale(1.05);
   }

   /* &:focus {
      border: 4px solid var(--blue-200);
      padding: 0;
   } */

   &:active {
      box-shadow: 0 0 4px rgba(28, 28, 28, 0.35);
      transform: scale(1);
   }

   @media screen and (min-width: 1024px) {
      width: 40px;
      height: 40px;
      bottom: 32px;
      right: 32px;
   }

   @media screen and (min-width: 1440px) {
      width: 48px;
      height: 48px;
      bottom: 40px;
      right: 40px;
   }
`

const UpIcon = styled.svg`
   margin-top: 2px;
   margin-left: 4px;
   width: 16px;
   height: 16px;

   @media screen and (min-width: 1024px) {
      width: 20px;
      height: 20px;
   }

`

function scrollToTop() {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   });
}

const UpButton = () => {

  //  // determined if page has scrolled and if the view is on mobile
  // const [scrolled, setScrolled] = useState(false);
  //
  // // change state on scroll
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 96;
  //     if (isScrolled !== scrolled) {
  //       setScrolled(!scrolled);
  //     }
  //
  //     // console.log(window.scrollY);
  //   };
  //
  //   document.addEventListener('scroll', handleScroll, { passive: true });
  //   console.log(scrolled);
  //      return () => {
  //        // clean up the event handler when the component unmounts
  //        document.removeEventListener('scroll', handleScroll);
  //      };
  //  }, [scrolled]);

   return (
         <ButtonContainer data-active="{scrolled}">
            <a href="#">
               <UpIcon viewBox="0 0 24 24" fill="none">
                  <path d="M9.5 0C10.0241 2.03352e-07 10.5482 0.221657 10.948 0.66497L18.5502 9.09321C19.1499 9.75817 19.1499 10.8363 18.5502 11.5013C17.9504 12.1662 16.9779 12.1662 16.3781 11.5013L11 5.53873L11 22.5C11 23.3284 10.3284 24 9.5 24C8.67157 24 8 23.3284 8 22.5L8 5.53873L2.62188 11.5013C2.02209 12.1662 1.04964 12.1662 0.449844 11.5013C-0.149948 10.8363 -0.149948 9.75817 0.449844 9.09321L8.05198 0.664969C8.45184 0.221656 8.97592 -2.03352e-07 9.5 0Z" fill="#1D1D1D"/>
               </UpIcon>
            </a>
         </ButtonContainer>
   );
}

export default UpButton
