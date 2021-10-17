import { useState, useEffect } from 'react'
import Saudation from './Saudation'
import JobsDataEntry from './JobsDataEntry'
import JobsListing from './JobsListing'
import jobsDataMockup from '../../data/jobs'
import { Job } from '../../types/Job'


const Home = () => {
   const jobsListStored = JSON.parse(localStorage.getItem('JOBS_LIST') || JSON.stringify(jobsDataMockup))
   
   const [jobsList, setJobsList] = useState<Job[]>(jobsListStored)

   useEffect(() => {
      localStorage.setItem('JOBS_LIST', JSON.stringify(jobsList))
   }, [jobsList])

   const insertJobToList = (job: Job) => {
      setJobsList( state => [...state!, job])
   }

   return (
      <>
         <Saudation />
         <JobsDataEntry insertJobToList={insertJobToList} />
         <JobsListing jobsList={jobsList} />
      </>
   )
}

export default Home
