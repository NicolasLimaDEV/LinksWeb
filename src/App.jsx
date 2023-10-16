import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { Container } from './styles'
import { lightTheme, darkTheme } from './theme'
import { GlobalStyles } from './GlobalStyle'


export default function App(){

  const [theme, setTheme] = useState('light')

  const themeToggler = ()=> {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return(
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <img src='https://github.com/nicolaslimadev.png' className='img-avatar'/>
          <h1>Nicolas Lima</h1>
            <h3>Desenvolvedor Frontend</h3>

            <button onClick={themeToggler}>Alterar tema</button>
      </Container>
    </ThemeProvider>
  )
}