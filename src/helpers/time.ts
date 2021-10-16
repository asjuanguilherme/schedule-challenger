type DifferenceTimeObject = {
   years: number;
   months: number;
   days: number;
   hours: number;
   minutes: number;
   seconds: number;
}

export const getElapsedTime= (date: string ): DifferenceTimeObject => {
   const currentTime = new Date().getTime()
   const pastTime = new Date(date).getTime()

   const differenceTime = currentTime - pastTime

   const seconds = 1000
   const minutes = seconds * 60
   const hours = minutes * 60
   const days = hours * 24
   const years = days * 365
   const months =  years/12

   const yearsTime = Math.floor(differenceTime / years)
   const monthsTime = Math.floor(differenceTime % years / months)
   const daysTime = Math.floor(differenceTime % months / days)
   const hoursTime = Math.floor(differenceTime % days / hours)
   const minutesTime = Math.floor(differenceTime % hours / minutes)
   const secondsTime = Math.floor(differenceTime % minutes / seconds)

   return {
      years: yearsTime,
      months: monthsTime,
      days: daysTime,
      hours: hoursTime,
      minutes: minutesTime,
      seconds: secondsTime,
   }
}

export const getTimeText = ( time: DifferenceTimeObject ) => {
   const { years, months, days, minutes, seconds } = time
   
   
   let text = ''
   
   if(years) { text += `${years} ${years > 1 ? 'anos' : 'ano'}` }
   if(months) { text += ` e ${months} ${months > 1 ? 'meses' : 'mes'}` }
   if(days) { text += ` e ${days} ${days > 1 ? 'dias' : 'dia'}` }
   if(minutes) { text += ` e ${minutes} ${minutes > 1 ? 'minutos' : 'minuto'}` }
   if(seconds) { text += ` e ${seconds} ${seconds > 1 ? 'segundos' : 'segundo'}` }

   return text
}