import * as S from './styles'
import Profile from '../Profile'
import Logo from '../../assets/images/Logo.svg'

const LayoutTemplate = ({children}: any) => {
   return (
      <S.Wrapper>
         <S.Logo src={Logo} />
         <Profile />
         <S.Main>
            <S.Content>
               { children }
            </S.Content>
         </S.Main>
      </S.Wrapper>
   )
}

export default LayoutTemplate
