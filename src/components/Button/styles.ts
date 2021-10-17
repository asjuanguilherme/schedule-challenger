import styled from 'styled-components'

export const Button = styled.button`
   height: 2rem;
   
   display: flex;
   align-items: center;
   justify-content: space-between;
   
   background-color: ${ props => props.theme.colors.primary };
   color: white;
   
   border-radius: .3rem;
   
   font-family: 'Mulish', sans-serif;
   font-weight: bold;
   
   transition: .3s;
   cursor: pointer;
   user-select: none;
   
   &:hover {
      background-color: ${ props => props.theme.colors.primaryLight };
   }

   &:active {
      background-color: ${ props => props.theme.colors.primaryDark };    
   }
`

export const Label = styled.span`
   padding: 0 1.5rem;
   width: 100%;
`

export const Prefix = styled.span`
   padding: 0 1rem;
   border-right: 2px solid white;
`