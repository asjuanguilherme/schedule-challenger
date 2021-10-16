import * as S from './styles'
import Profile from '../Profile'

const LayoutTemplate = ({children}: any) => {
   return (
      <S.Wrapper>
         <Profile />
         <S.Main>
            { children }
         </S.Main>
      </S.Wrapper>
   )
}

export default LayoutTemplate
