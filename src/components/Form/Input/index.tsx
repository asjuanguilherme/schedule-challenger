import * as S from './styles'

interface Props {
   type?: 'text' | 'number' | 'date';
   name?: string;
   placeholder?: string;
   value: string;
   onlyFutureDates?: boolean;
   min?: string;
   max?: string;
   error: string | null;
   success: boolean;
   setValue: Function;
   onChange?: (event: any) => void;
   onBlur?: (event: any) => void;
   isEmpty?: (value: string) => boolean;

   rounded?: boolean;
}

const Input = ( {rounded = true, ...props}: Props ) => {
   return (
      <S.Wrapper>
         <S.Input {...props} rounded={rounded} max={props.max} min={props.min} />
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
