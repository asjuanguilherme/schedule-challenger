import * as S from './styles'
import * as date from '../../../helpers/date'
import { useEffect, useState, useContext } from 'react'
import { useForm } from '../../../hooks/useForm'
import { FaCalendar } from 'react-icons/fa'
import Input from '../../../components/Form/Input'
import Button from '../../../components/Button'
import { createJob } from '../../../helpers/job'
import Select from '../../../components/Form/Select'
import { Job } from '../../../types/Job'
 
interface Props {
   insertJobToList: Function;
   jobsList: Job[];
}

const JobsDataEntry = ({insertJobToList, jobsList}: Props) => {

   const dateInput = useForm({required: true})
   const startHour = useForm({required: true})
   const startMinute = useForm({required: true})

   const checkScheduleConflict = (newJobStart: string, newJobEnd: string) => {
      let isBusy = false
            
      // console.log(newJobStart, newJobEnd)
      jobsList.forEach( a => {         
         // console.log(a.start, a.end)
         console.log()
         if(date.isScheduleBusy(a.start, a.end, newJobStart, newJobEnd)) {
            isBusy = true
            return false
         }
      })

      return isBusy
   }

   const handleChangeHours = (e: any) => {
      if( /^[0-9]{0,2}$/.test(e.target.value)) {
         startHour.setValue(e.target.value)
      }
      if(e.target.value > 23) {
         startHour.setValue('23')
      }
   }

   const handleBlurHours = (e: any) => {
      if(e.target.value.length < 2) {
         startHour.setValue(`0${e.target.value.length === 1? e.target.value.length : '0'}`)
      }
   }
   
   const handleChangeMinutes = (e: any) => {
      if( /^[0-9]{0,2}$/.test(e.target.value) && e.target.value < 60) {
         startMinute.setValue(e.target.value)
      }
      if(e.target.value > 59) {
         startMinute.setValue('59')
      }
   }

   const handleBlurMinutes = (e: any) => {
      if(e.target.value.length < 2) {
         startMinute.setValue(`0${e.target.value.length === 1? e.target.value.length : '0'}`)
      } 
   }

   const handleSubmit = (e:any) => {
      e.preventDefault()

      if(dateInput.value && startMinute.value && startMinute.value && startHour.value) {
         const [yearDate, monthDate, dayDate] = dateInput.value.split('-')
         const job = createJob({
            year: Number(yearDate),
            month: Number(monthDate),
            day: Number(dayDate),
            startHour: Number(startHour.value),
            startMinutes: Number(startMinute.value),
            hours: 1
         })

         console.log(
            checkScheduleConflict(job.start, job.end)
         )
         if(!checkScheduleConflict(job.start, job.end)) {
            insertJobToList(job)
            dateInput.setValue('')
            startHour.setValue('00')
            startMinute.setValue('00')
         }
      }
   }

   const dateOptions = date.getDaysUntilEndOfYear().map( day => (
      { name: date.getStringDate(day), value: day }
   ))

   return (
      <>
      <S.FormWrapper onSubmit={handleSubmit} >
         <Select options={dateOptions}
            placeholder="Selecione uma data..."
            value={dateInput.value}
            setValue={dateInput.setValue}
            error={dateInput.error}
         />

         <div>
            <S.TimeInput error={null} >
               <Input
                  rounded={false}
                  placeholder="Hora"
                  onChange={handleChangeHours}
                  onBlur={handleBlurHours}
                  {...startHour}
               />
               <Input rounded={false}
                  placeholder="Minuto"
                  onChange={handleChangeMinutes}
                  onBlur={handleBlurMinutes}
                  {...startMinute}
               />
            </S.TimeInput>
            <S.TimeInputError>
               { startHour.error }
            </S.TimeInputError>
         </div>
         
         <Button prefix={ <FaCalendar /> } label="Adicionar" />
      </S.FormWrapper>
   </>
   )
}

export default JobsDataEntry
