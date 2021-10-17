import * as S from './styles'
import { useEffect, useState } from 'react'
import Input from '../../../components/Form/Input'
import { useForm } from '../../../hooks/useForm'
import * as date from '../../../helpers/date'
import { FaCalendar } from 'react-icons/fa'
import Button from '../../../components/Button'
import { Job } from '../../../types/Job'
import { getScheduleJob } from '../../../helpers/job'

interface Props {
   insertToList: Function;
}

const JobsDataEntry = ({insertToList}: Props) => {

   const dateInput = useForm({required: true})
   
   const startMinutes = useForm({required: true})
   const startHours = useForm({required: true})

   const endMinutes = useForm({required: true})
   const endHours = useForm({required: true})
   
   const dateInputVerification = () => {
      if( dateInput.value.length ) {
         if(!/^[0-9]{4}[-][0-9]{2}[-][0-9]{2}/.test(dateInput.value)) {
            dateInput.setSuccess(false)
            dateInput.setError('Data Inválida')
         }
         else if( date.isAPastDay(dateInput.value) > 0 ) {
            dateInput.setSuccess(false)
            dateInput.setError('Você consegue voltar no tempo?')
         } else {
            dateInput.setSuccess(true)
            dateInput.setError('')
         }
      }
   }

   useEffect( () => {
      dateInputVerification()
   }, [dateInput.value])

   type CreateJob = {
      year: number;
      month: number;
      day: number;
      startHour: number;
      startMinutes: number;
      endHour: number;
      endMinutes: number;
   }

   const createJob = (options: CreateJob ) : Job => {
      const { year, month, day, startHour, startMinutes, endHour, endMinutes } = options

      return {
         start: date.getIsoDate(year, month, day, startHour, startMinutes),
         end: date.getIsoDate(year, month, day, endHour, endMinutes)
      }
   }

   const [jobCreated, setJobCreated] = useState<Job>()

   const handleSubmit = () => {
      const job = createJob({
         year: 2021,
         month: 9,
         day: 17,
         startHour: 12,
         startMinutes: 40,
         endHour: 18,
         endMinutes: 35
      })
      
      setJobCreated(job)
   }

   return (
      <S.Wrapper>
         <Input
            min={new Date().toISOString().split('T')[0]}
            type='date'
            placeholder="selecione uma data"
            {...dateInput}
         />
         <S.TimeInput>
            <Input placeholder="Hora" type="number" {...startHours} />
            <Input placeholder="Minuto" type="number" {...startMinutes}/>
         </S.TimeInput>
         <S.TimeInput>
            <Input placeholder="Hora" type="number" {...endHours} />
            <Input placeholder="Minuto" type="number" {...endMinutes}/>
         </S.TimeInput>
         <Button prefix={ <FaCalendar /> } label="Adicionar" onClick={handleSubmit} />
      </S.Wrapper>
   )
}

export default JobsDataEntry
