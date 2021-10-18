import { getMonthName } from '../helpers/date'
import { Job } from '../types/Job'
import { getIsoDate } from './date'

export const getScheduleJob = (start: string, end: string) => {
   const startDate = new Date(start)
   const endDate = new Date(end)
   const day = startDate.getDate()
   const month = getMonthName(startDate.getMonth(), false)
   
   const startHour = startDate.getHours() > 9 ? startDate.getHours() : `0${startDate.getHours()}`
   let startMinutes = startDate.getMinutes() > 9 ? startDate.getMinutes() : `0${startDate.getMinutes()}`
   startMinutes = startMinutes !== '00' ? startMinutes : ''
   
   const endHour = endDate.getHours() > 9 ? endDate.getHours() : `0${endDate.getHours()}`
   let endMinutes = endDate.getMinutes() > 9 ? endDate.getMinutes() : `0${endDate.getMinutes()}`
   endMinutes = endMinutes !== '00' ? endMinutes : ''

   return `${day}/${month} das ${startHour}h${startMinutes} às ${endHour}h${endMinutes}`
}

export const getJobStatus = (start: string) => {
   const startDate = new Date(start).getTime()
   const now = new Date().getTime()
   const difference = startDate - now
   
   const halfADay = 1000 * 60 * 60 * 12
   
   if(difference < halfADay && difference > 0)
      return `alert`

   else if(difference < 0)
      return `danger`
   
   return `success`
}

type CreateJob = {
   year: number;
   month: number;
   day: number;
   startHour: number;
   startMinutes: number;
   hours: number;
}

export const createJob = (options: CreateJob ) : Job => {
   const { year, month, day, startHour, startMinutes, hours } = options

   const hour = 1000 * 60 * 60 
   const hoursAmount = hour * hours

   const dateStart = new Date(getIsoDate(year, month, day, startHour, startMinutes)).getTime() 
   const dateEnd = new Date(getIsoDate(year, month, day, startHour, startMinutes)).getTime() + hoursAmount

   return {
      start: new Date(dateStart).toISOString(),
      end: new Date(dateEnd).toISOString()
   }
}