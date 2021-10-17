import styled, { css } from 'styled-components'

export const BoardWrapper = styled.div`
   margin-top: 2rem;
   background-color: ${ props => props.theme.colors.primary };
   color: white;
   border-radius: .6rem;

   *::selection {
      background-color: ${ props => props.theme.colors.secondary };
      color: white;
   }
`
export const BoardHeader = styled.div`
   padding: 1rem;
   display: flex;

   @media screen and (max-width: 768px) {
      display: grid;
      gap: .5rem;
   }
`

export const BoardBody = styled.div`
   padding: 1rem;
`

const TooltipEnabled = css`
   bottom: 1.8rem;
   opacity: 1;
   visibility: visible;
`

export const Tooltip = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   
   height: 2rem;
   padding: 0 1.5rem;
   min-width: 8rem;
   width: max-content;
   font-size: .75rem;
   
   background-color: #2C3033;
   border-radius: .3rem;

   transition: .3s;
   user-select: none;

   position: absolute;
   visibility: hidden;
   left: 50%;
   bottom: .8rem;
   z-index: 10;
   transform: translateX(-50%);

   transition: .2s linear;
   opacity: 0;

   &::after {
      content: '';
      width: .5rem;
      height: .5rem;
      transform: rotate(45deg);
      background-color: #2C3033;
      position: absolute;
      bottom: -.2rem
   }

   &:hover {
      display: none;
   }

   @media screen and (max-width: 768px) {
      display: none;
   }

`

export const Legend = styled.span<{variant: string;}>`
   position: relative;
   margin-right: .5rem;

   @media screen and (max-width: 768px) {
      display: flex;
      align-items: center;
   }


   &::before {
      content: '';
      display: inline-block;
      height: .875rem;
      width: .875rem;
      background-color: ${ props => props.theme.colors[props.variant]};
      border-radius: 50%;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,.3);
   }

   &:hover {
      ${Tooltip} {
         ${TooltipEnabled}
      }
   }
`

export const LegendText = styled.div`
   margin-left: .5rem;
   @media screen and (min-width: 768px) {
      display: none;
   }
`

export const JobsList = styled.ul`
   list-style: none;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   gap: .5rem 1.5rem;

   @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
   }

   @media screen and (max-width: 480px) {
      grid-template-columns: 1fr;
   }
`

export const JobsItem = styled.li`
   display: flex;
`