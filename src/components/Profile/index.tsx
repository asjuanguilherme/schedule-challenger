import { useContext } from 'react'
import * as S from './styles'
import { UserContext } from '../../contexts/User'
import { getElapsedTime, getTimeText } from '../../helpers/time'

const Profile = () => {
   const user = useContext(UserContext)

   console.log(user)

   const companyTime = getElapsedTime(user.created_at)

   const timeText = getTimeText({
      years: companyTime.years,
      months: companyTime.months,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
   })
   
   return (
      <S.Wrapper>
         <S.ProfileUser>
            <S.UserAvatar src={user.picture} />
            
            <S.UserTitle>
               <S.Name>{`${user.first_name} ${user.last_name}`}</S.Name>
               <S.Role>{user.role}</S.Role>
            </S.UserTitle>
         </S.ProfileUser>

         <S.ProfileDetails>
            <span>Altura: {user.height/100}</span>
            <span>Manequim: {user.size}</span>
            <span>Calçado: {user.shoe}</span>
         </S.ProfileDetails>

         <S.CompanyTime>
            [] Tempo na Clooser: {timeText}
         </S.CompanyTime>
         
      </S.Wrapper>
   )
}

export default Profile
