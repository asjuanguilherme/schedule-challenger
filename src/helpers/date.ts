const getMonthName = (month: number, large = true) => {
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