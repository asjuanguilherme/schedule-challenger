import * as S from './styles'
import { getScheduleJob, getJobStatus } from '../../../helpers/job'
import { Job } from '../../../types/Job'

interface Props {
   jobsList: Job[];
}

const JobsListing = ({jobsList}: Props) => {   

   jobsList.sort( (a, b) => {
      const prevDate = new Date(a.start).getTime()
      const currDate = new Date(b.start).getTime()

      return prevDate - currDate
   })

   const renderJobs = () => (
      jobsList.map( (job, index) => {
         if(new Date(job.end).getFullYear() === new Date().getFullYear())
            return(
               <S.JobsItem key={index} >
                  <S.Legend variant={getJobStatus(job.start)} />
                     <S.Tooltip>Proximo do Inicio</S.Tooltip>
                  { getScheduleJob(job.start, job.end) }
               </S.JobsItem>
            )
      })
   )

   return (
      <S.BoardWrapper>
         <S.BoardHeader>
            <S.Legend variant='success'>
               <S.Tooltip>Para o futuro</S.Tooltip>
               <S.LegendText>Para o futuro</S.LegendText>
            </S.Legend>
            <S.Legend variant='alert'>
               <S.Tooltip>Proximo do Inicio</S.Tooltip>
               <S.LegendText>Proximo do Inicio</S.LegendText>
            </S.Legend>
            <S.Legend variant='danger'>
               <S.Tooltip>Já Iniciou</S.Tooltip>
               <S.LegendText>Já Iniciou</S.LegendText>
            </S.Legend>
         </S.BoardHeader>

         <S.BoardBody>
            <S.JobsList>
               {renderJobs()}
            </S.JobsList>
         </S.BoardBody>
      </S.BoardWrapper>
   )
}

export default JobsListing
