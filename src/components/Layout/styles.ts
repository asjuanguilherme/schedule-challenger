import styled from 'styled-components'

export const Wrapper = styled.div`
   display: flex;
   min-height: 100vh;
   width: 100%;

   *::selection {
      background-color: ${ props => props.theme.colors.primary };
      color: white;
   }

   @media screen and (max-width: 991px) {
      display: block;
   }
`

export const Main = styled.main`
   max-width: 768px;
   margin: 0 auto;
   width: 100%;
   padding: 1rem;
   padding-top: 10rem;

   @media screen and (max-width: 991px) {
      padding-top: 5rem;
   }

   @media screen and (max-width: 480px) {
      padding-top: 2em;
   }
`

export const Logo = styled.img`
   user-select: none;
   position: absolute;
   right: 1.5rem;
   top: 1.5rem;

   @media screen and (max-width: 991px) {
      display: none;
   }
`