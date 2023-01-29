import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Flex, Heading, Input, Button, useColorMode, useColorModeValue} from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const {toggleColorMode} = useColorMode();
  const formBg = useColorModeValue('gray.100', 'gray.700')
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex direction='column' background={formBg} p={12} rounded={6} >
        <Heading mb={6}>Log In</Heading>
        <Input placeholder='nida@chakra-ui.com' variant='filled' mb={3} type='email' />
        <Input placeholder='********' variant='filled' mb={6} type='password' />
        <Button colorScheme="teal">Log In</Button>
        <Button onClick={toggleColorMode}>Change Theme</Button>
      </Flex>
    </Flex>
  )
}
