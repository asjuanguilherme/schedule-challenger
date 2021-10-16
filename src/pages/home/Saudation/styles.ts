import styled from 'styled-components'

export const Saudation = styled.div`
   width: 100%;
   
   @media screen and (max-width: 991px) {
      padding: 0 3rem;
      text-align: center;
   }
`

export const SaudationTitle = styled.h1`
   margin-bottom: .3rem;
   @media screen and (max-width: 480px) {
      font-size: 1.3rem;
   }
`

export const SaudationText = styled.p`
   @media screen and (max-width: 480px) {
      font-size: .875rem;
   }
`