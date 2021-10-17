import * as S from './styles'
import { useState, useEffect } from 'react'
import Saudation from './Saudation'
import JobsDataEntry from './JobsDataEntry'
import JobsListing from './JobsListing'
import jobsDataMockup from '../../data/jobs'
import { Job } from '../../types/Job'


const Home = () => {
   const [jobsList, setJobsList] = useState<Job[]>(jobsDataMockup)

   const insertToList = (job: Job) => {
      setJobsList( state => [...state!, job])
   }

   return (
      <>
         <Saudation />
         <JobsDataEntry insertToList={insertToList} />
         <JobsListing jobsList={jobsList} />
      </>
   )
}

export default Home
