import * as S from './styles'
import { useState } from 'react'

type Option = {
   name: string;
   value: string;
}

interface Props {
   options: Option[];
   placeholder: string;
   value: string | null;
   setValue: Function;
}

const Select = (props: Props) => {
   const [opened, setOpened] = useState(false)
   const [selectedName, setSelectedName] = useState()

   const open = () => setOpened(!opened)
   const close = () => setOpened(false)

   const selectOption = (e: any) => {
      props.setValue(e.target.value)
      setSelectedName(e.target.textContent)
   }


   const renderOptions = (options: Option[]) => (
      options.map( option => (
         <S.SelectOption onClick={selectOption} value={option.value}>
            {option.name}
         </S.SelectOption>
      ))
   )

   return (
      <S.Wrapper>
         <S.SelectButton active={opened} type="button" onFocus={open} onBlur={close} >
            { selectedName?? props.placeholder}
         </S.SelectButton>

         <S.SelectOptions active={opened} onClick={close} >
            {props.options && renderOptions(props.options)}
         </S.SelectOptions>
      </S.Wrapper>
   )
}

export default Select
