import { useState } from 'react'

type Options = {
   required?: boolean;
}

export const useForm = (options: Options) => {
   const [value, setValue] = useState('')
   const [error, setError] = useState<null | string>(null)
   const [success, setSuccess] = useState(false)

   const isEmpty = () => {
      if( !options.required && value.length === 0 ) {
         setSuccess(false)
         setError('Preencha esse campo.')
         return true
      }

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