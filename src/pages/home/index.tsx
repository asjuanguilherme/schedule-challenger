import * as S from './styles'
import { useContext } from 'react'
import { UserContext } from '../../contexts/User'
import { Profile } from '../../types/Profile'
import Saudation from './Saudation'
import JobsDataEntry from './JobsDataEntry'

const Home = () => {
   return (
      <>
         <Saudation />
         <JobsDataEntry />
         {/* <JobsDataListing /> */}
      </>
   )
}

export default Home
