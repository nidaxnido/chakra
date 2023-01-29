import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors:{
    brand:{
      100:'#757575',
      200:'#009688',
      300:'#f1f1f1'
    }
  },
  fonts:{
    body:`'Roboto', sans-serif`
  },
  styles:{
    global:() => ({
      body:{
        bg:'#f1f1f1'
      }
    })
  }
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
       <Component {...pageProps} />
    </ChakraProvider>
  )
}
