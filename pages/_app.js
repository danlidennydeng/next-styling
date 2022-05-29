import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components'

const theme = {
  color: {
    primary: '#39908B'
  }
}


function MyApp({ Component, pageProps }) {
  return (

    <ThemeProvider theme={theme}> 
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
