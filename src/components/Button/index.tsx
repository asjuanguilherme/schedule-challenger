import * as S from './styles'

type Props = {
   label: string;
   prefix: any;
   onClick?: () => void;
}

const Button = ({label, prefix, onClick}: Props) => {
   return (
      <S.Button onClick={onClick}>
         { prefix &&
            <S.Prefix>
               {prefix}
            </S.Prefix>
         }
         { label &&
            <S.Label>
               {label}
            </S.Label>
         }
      </S.Button>
   )
}

export default Button
