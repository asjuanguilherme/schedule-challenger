import styled from 'styled-components'

export const Wrapper = styled.div`
   display: flex;
   min-height: 100vh;
   width: 100%;

   @media screen and (max-width: 991px) {
      display: block;
   }
`

export const Main = styled.main`
   max-width: 960px;
   margin: 0 auto;
   width: 100%;
   padding: 1rem;
   display: flex;
   align-items: center;
`