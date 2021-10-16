import * as S from './styles'
import { useContext } from 'react'
import { UserContext } from '../../contexts/User'

const Home = () => {
   const user = useContext(UserContext) 

   return (
      <>
         <S.Saudation>
            <S.SaudationTitle>
               Bem-vindo(a), {user.first_name}!
            </S.SaudationTitle>
            
            <S.SaudationText>
               Adicione seus jobs a agenda e gerencie sua rotina
            </S.SaudationText>
         </S.Saudation>

         {/* <JobsFormEntry /> */}
         {/* <JobsDataListing /> */}
      </>
   )
}

export default Home
