import * as S from './styles'
import * as date from '../../../helpers/date'
import { useEffect, useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import { FaCalendar } from 'react-icons/fa'
import Input from '../../../components/Form/Input'
import Button from '../../../components/Button'
import { createJob } from '../../../helpers/job'
import Select from '../../../components/Form/Select'

interface Props {
   insertJobToList: Function;
}

const JobsDataEntry = ({insertJobToList}: Props) => {
   const dateInput = useForm({required: true})
   const startMinutes = useForm({required: true})
   const startHours = useForm({required: true})
   const endMinutes = useForm({required: true})
   const endHours = useForm({required: true})

   useEffect( () => {

   }, [dateInput.value])

   const validateFields = () => {
      if(dateInput.value && startMinutes.value && startMinutes.value && startHours.value && endMinutes.value && endHours.value)

      return true
   }

   const handleSubmit = (e:any) => {
      e.preventDefault()

      if(validateFields()) {
         const [yearDate, monthDate, dayDate] = dateInput.value.split('-')
         const year = Number(yearDate)
         const month = Number(monthDate)
         const day = Number(dayDate)
         const startH = Number(startHours.value)
         const startM = Number(startMinutes.value)
         const endH = Number(endHours.value)
         const endM = Number(endMinutes.value)
   
         const job = createJob({
            year: year,
            month: month,
            day: day,
            startHour: startH,
            startMinutes: startM,
            endHour: endH,
            endMinutes: endM
         })
         
         insertJobToList(job)
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
         />
         <S.TimeInput>
            
         </S.TimeInput>
         <Button prefix={ <FaCalendar /> } label="Adicionar" />
      </S.FormWrapper>
   </>
   )
}

export default JobsDataEntry
