import * as S from './styles'
import { isScheduleBusy } from '../../../helpers/date'
import { getScheduleJob, getJobStatus } from '../../../helpers/job'
import { Job } from '../../../types/Job'

interface Props {
   jobsList: Job[];
}

const JobsListing = ({jobsList}: Props) => {   
   const renderJobs = () => (
      jobsList.map( (job, index) => {
         if(new Date(job.end).getFullYear() === new Date().getFullYear())
            return(
               <S.JobsItem key={index} >
                  <S.Legend variant={getJobStatus(job.start)} />
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
