import { useContext } from 'react'
import GlobalStyle from './styles/globalStyle'
import { ThemeProvider, ThemeContext } from './contexts/Theme'
import Page from './components/Layout/Page'

const App = () => {
  const Theme = useContext(ThemeContext)
  console.log(Theme)

  return (
    <Page>
      Olá Mundo!!
    </Page>
  )
}

export default App
