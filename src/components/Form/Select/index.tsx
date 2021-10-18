import * as S from './styles'
import { useState, useEffect } from 'react'

type Option = {
   name: string;
   value: string;
}

interface Props {
   options: Option[];
   placeholder: string;
   value: string | null;
   setValue: Function;
   error: string | null;
}

const Select = (props: Props) => {
   const [opened, setOpened] = useState(false)
   const [selectedName, setSelectedName] = useState<string | null>()

   const open = () => setOpened(!opened)
   const close = () => setOpened(false)

   const selectOption = (e: any) => {
      props.setValue(e.target.value)
      setSelectedName(e.target.textContent)
   }

   useEffect(() => {
      if(props.value === '')
         setSelectedName(null)
   }, [props.value]) 

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
            
         { props.error &&
            <S.Error>
               <S.ErrorIcon />
               { props.error }
            </S.Error>
         }
      </S.Wrapper>
   )
}

export default Select
