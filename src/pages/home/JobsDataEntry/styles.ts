import styled from 'styled-components'

export const Wrapper = styled.div`
   display: block;
   width: 100%;
   margin-top: 2.5rem;

   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   gap: 1rem;

   @media screen and (max-width: 640px) {
      grid-template-columns: 1fr;
      grid-row-end: span;
      gap: 1.5rem;
   }
`

export const TimeInput = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: .2rem;
`