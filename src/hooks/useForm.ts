import { useState } from 'react'

type Options = {
   required?: boolean;
}

export const useForm = (options: Options) => {
   const [value, setValue] = useState('')
   const [error, setError] = useState<null | string>(null)
   const [success, setSuccess] = useState(false)

   const isEmpty = (value: string) => {
      if( value.length || !options.required ) {
         return false
      }
      
      setSuccess(false)
      setError('Preencha esse campo.')
      return true
   }

   return {
      value,
      success,
      error,
      setValue,
      setSuccess,
      setError,
      isEmpty,
   }
}