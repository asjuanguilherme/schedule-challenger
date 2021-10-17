export const getMonthName = (month: number, large = true) => {
   const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
   ]

   if(!large)
      return months[month].substring(0,3)

   return months[month]
}

export const getExtenseDate = (date = null, large = true) :string => {
   const dateTarget = new Date()

   const day = dateTarget.getDate()
   const month = dateTarget.getMonth()
   const year = dateTarget.getFullYear()
   const hours = dateTarget.getHours()
   const minutes = dateTarget.getMinutes()

   if(!large)
      return `${day} de ${getMonthName(month, false)} de ${year} - ${hours}:${minutes}`

   return `Hoje - ${day} de ${getMonthName(month)} de ${year} - ${hours}:${minutes}`
}

export const getFormatedDate = (date?: string) => new Date(date!).toISOString().split('T')[0]

export const getStringDate = (date: string, showYear = true) => {
   const targetDate = new Date(date);
   const day = targetDate.getDate()+1 > 9 ? targetDate.getDate()+1 : `0${targetDate.getDate()+1}`
   const month = getMonthName(targetDate.getMonth())
   const year = targetDate.getFullYear()

   return`${day} de ${month}${ showYear? ` de ${year}` : ''}`
}

export const isAPastDay = (date: string) => {
   const daySeconds = 24 * 60 * 60 * 1000

   const now = new Date().setHours(0,0,0,0) - daySeconds
   const targetDate = new Date(date).setHours(0,0,0,0)

   return now - targetDate
}

export const isToday = (date: string) => getFormatedDate() === getFormatedDate(date)

export const getIsoDate = (year: number, month: number, day: number, hours: number, minutes: number) => {
   let monthValue = month > 9 ? month : `0${month}`
   let dayValue = day > 9 ? day : `0${day}`
   let hoursValue = hours > 9 ? hours : `0${hours}`
   let minutesValue = minutes > 9 ? minutes : `0${minutes}`
   
   return new Date(`${year}-${monthValue}-${dayValue}T${hoursValue}:${minutesValue}`).toISOString()
}

export const getDaysUntilEndOfYear = () => {
   let thisYear = true
   let daysCount = 0
   const days = []

   do {
      const day = 1000 * 60 * 60 * 24
      const todayTime = new Date().setHours(0,0,0,0) + daysCount * day
      const today = new Date(todayTime)
      const tomorrow = new Date(todayTime + day)
      
      days.push(today.toISOString().split('T')[0])

      daysCount++

      if( tomorrow.getFullYear() > today.getFullYear() )
         thisYear = false

   } while(thisYear)

   return days
}