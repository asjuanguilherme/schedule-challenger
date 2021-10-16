import styled, { css, keyframes } from 'styled-components'
import { FaExclamationCircle, FaCheckCircle } from 'react-icons/fa'

export const Wrapper = styled.div`
   position: relative;
`

const ErrorStyle = css`
   box-shadow: 0 0 0 2px ${ props => props.theme.colors.danger };
`

const SuccessStyle = css`
   box-shadow: 0 0 0 2px ${ props => props.theme.colors.success };
`

export const Input = styled.input<{error: string | null, success: boolean;}>`
   width: 100%;
   background-color: #F2F2F2;
   height: 2rem;
   padding: 0 1rem;
   border-radius: .3rem;
   font-family: 'Mulish', sans-serif;
   font-size: .875rem;

   transition: .5s;
   ${ props => props.error? ErrorStyle : ''}
   ${ props => props.success? SuccessStyle : '' }
`

export const Label = styled.label`

`

export const SuccessIcon = styled(FaCheckCircle)`
   position: absolute;
   right: 1rem;
   top: 50%;
   transform: translateY(-50%);
   color: ${ props => props.theme.colors.success}
`

const ErrorAnimation = keyframes`
   from {
      transform: translateX(-.875rem);
      opacity: .3;
   }
`

export const Error = styled.span`
   font-size: .875rem;
   position: absolute;
   left: 0;
   bottom: -1.3rem;
   color: ${props => props.theme.colors.danger };
   animation: ${ErrorAnimation} linear .1s;
`

export const ErrorIcon = styled(FaExclamationCircle)`
   margin-right: .2rem;
   margin-bottom: -.1rem;
   font-size: .8rem;
`