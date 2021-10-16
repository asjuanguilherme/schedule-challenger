import * as S from './styles'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/User'
import { Profile } from '../../../types/Profile'

const Saudation = () => {
   const user: Profile = useContext(UserContext) 

   return (
      <S.Saudation>
         <S.SaudationTitle>
            Bem-vindo(a), {user.first_name}!
         </S.SaudationTitle>
         
         <S.SaudationText>
            Adicione seus jobs a agenda e gerencie sua rotina
         </S.SaudationText>
   </S.Saudation>
   )
}

export default Saudation
