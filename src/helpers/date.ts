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