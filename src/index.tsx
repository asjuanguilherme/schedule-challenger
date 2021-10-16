import App from './App'
import ReactDOM from 'react-dom'
import { ThemeProvider } from './contexts/Theme'
import { UserProvider } from './contexts/User'
import GlobalStyle from './styles/globalStyle'

ReactDOM.render(
   <UserProvider>
      <ThemeProvider>
         <GlobalStyle />
         <App />
      </ThemeProvider>
   </UserProvider>
   ,
   document.getElementById('root')
)