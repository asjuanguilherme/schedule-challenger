import { useContext, useEffect, useState } from 'react'
import * as S from './styles'
import { UserContext } from '../../contexts/User'
import Logo from '../../assets/images/Logo-light.svg'
import { getElapsedTime, getTimeText } from '../../helpers/time'
import { getExtenseDate } from '../../helpers/date'

const Profile = () => {
   const user = useContext(UserContext)
   const companyTime = getElapsedTime(user.created_at!)
   
   const timeText = getTimeText({
      years: companyTime.years,
      months: companyTime.months,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
   })

   const [actualTime, setActualTime] = useState(getExtenseDate())
   const [mobileActualTime, setMobileActualTime] = useState(getExtenseDate())

   useEffect(() => {
      setInterval(() => {
         setActualTime(getExtenseDate())
         setMobileActualTime(getExtenseDate(null, false))
      }, 1000)
   })

   return (
      <S.Wrapper>
         <S.Header>
            <S.Logo src={Logo} />
            <S.Time>{ actualTime }</S.Time>
            <S.TimeMobile>{ mobileActualTime }</S.TimeMobile>
         </S.Header>
         
         <S.ProfileUser>
            <S.UserAvatar src={user.picture} />
            
            <S.UserTitle>
               <S.Name>
                  {`${user.first_name} ${user.last_name}`} <S.ValidatedUser/>
               </S.Name>
               <S.Role>{user.role}</S.Role>
            </S.UserTitle>
         </S.ProfileUser>

         <S.ProfileDetails>
            <span>Altura: {(user.height!/100).toString().replace('.', ',')}m</span>
            <span>Manequim: {user.size}</span>
            <span>Calçado: {user.shoe}</span>
         </S.ProfileDetails>

         <S.CompanyTime>
            <S.ClockIcon/> Tempo na Clooser: {timeText}
         </S.CompanyTime>
      </S.Wrapper>
   )
}

export default Profile
