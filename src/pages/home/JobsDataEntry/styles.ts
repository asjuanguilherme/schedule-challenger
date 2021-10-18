import styled from 'styled-components'

export const FormWrapper = styled.form`
   display: block;
   width: 100%;
   margin-top: 2.5rem;

   display: grid;
   grid-template-columns: 1fr 1fr .7fr;
   gap: 1rem;

   @media screen and (max-width: 640px) {
      grid-template-columns: 1fr;
      grid-row-end: span;
      gap: 1rem;
   }
`

export const TimeInput = styled.div<{error: string | null}>`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: .2rem;

   height: fit-content;

   border-radius: .3rem;
   overflow: hidden;

   ${ props => props.error? 'box-shadow: 0 0 0 1px ${ props => props.theme.colors.danger' : ''};
`

export const TimeInputError = styled.div`
   position: absolute;
   margin-top: .2rem;
   font-size: .875rem;
   font-weight: bold;
   color: ${ props => props.theme.colors.danger };
`