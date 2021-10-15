import { useState, createContext } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { light } from '../styles/themes'

export const ThemeContext = createContext({})

export const ThemeProvider = ({children}: any) => {
   const [theme, setTheme] = useState(light)

   return(
      <ThemeContext.Provider value={{...theme}} >
         <SCThemeProvider theme={theme} >
            { children }
         </SCThemeProvider>
      </ThemeContext.Provider>
   )
}