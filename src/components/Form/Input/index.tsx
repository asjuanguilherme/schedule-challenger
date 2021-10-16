import * as S from './styles'

interface Props {
   type?: 'text' | 'number' | 'date';
   name?: string;
   placeholder: string;
   value: string;
   error: string | null;
   success: boolean;
   onChange: () => void;
   onBlur: () => void;
   min?: string;
   max?: string;
}

const Input = ( props: Props ) => {
   return (
      <S.Wrapper>
         <S.Input {...props}/>

         { props.success &&
            <S.SuccessIcon />
         }

         { props.error &&
            <S.Error>
               <S.ErrorIcon />
               {props.error}
            </S.Error>
         }
      </S.Wrapper>
   )
}

export default Input
