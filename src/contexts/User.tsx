import { useState, useEffect, createContext } from 'react'
import { getProfile } from '../services/profile'
import { Profile } from '../types/Profile'

export const UserContext = createContext({})

export const UserProvider = ({children}: any) => {
   const [userData, setuserData] = useState<Profile | {}>({})

   useEffect(() => {
     getProfile().then( data => setuserData(data))
   }, [])

   return(
      <UserContext.Provider value={userData} >
         { children }
      </UserContext.Provider>
   )
}
