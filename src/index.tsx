import App from './App'
import ReactDOM from 'react-dom'
import { ThemeProvider } from './contexts/Theme'
import GlobalStyle from './styles/globalStyle'

ReactDOM.render(
   <ThemeProvider>
      <GlobalStyle />
      <App />
   </ThemeProvider>
   ,
   document.getElementById('root')
)