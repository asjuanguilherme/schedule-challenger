import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
   user-select: none;
   position: relative;
   font-size: .875rem;
   width: 250px;
`

const buttonActive = css`
   box-shadow: 0 0 0 2px ${ props => props.theme.colors.primary };
   background-color: white;
`

export const SelectButton = styled.button<{active: boolean;}>`
   height: 2rem;
   width: 100%;
   padding: 0 1rem;
   border-radius: .3rem;

   text-align: left;
   font-family: 'Mulish';
   font-weight: 500;

   background-color: #F2F2F2;

   cursor: pointer;
   transition: .2s;
   ${ props => props.active? buttonActive : '' }
`

const selectOptionsDisabled = css`
   max-height: 0px;
   overflow: hidden;
   opacity: 0;
`

export const SelectOptions = styled.ul<{active: boolean}>`
   list-style: none;
   width: 100%;
   max-height: 250px;
   background-color: #FFF;
   overflow-y: auto;

   position: absolute;
   z-index: 20;
   bottom: -.5rem;
   transform: translateY(100%);

   border-radius: .3rem;

   box-shadow: 0 .2rem .6rem rgba(0,0,0,.2);
   transition: .3s;
   transition-property: max-height, opacity;

   ${ props => !props.active? selectOptionsDisabled : '' }
`

export const SelectOption = styled.option`
   cursor: pointer;
   width: 100%;
   height: 2rem;
   padding: 0 1rem;
   margin: .2rem 0;

   display: flex;
   align-items: center;
   background-color: white;

   &:hover {
      color: white;
      background-color: ${ props => props.theme.colors.primary };
   }
`