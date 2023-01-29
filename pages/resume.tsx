import {Stack,VStack,HStack, Box, Flex, Container, Image, Icon, Heading} from '@chakra-ui/react'
import {FaBriefcase, FaHome, FaPhone, FaEnvelope } from 'react-icons/fa'
import { Head } from 'next/document';
// import setBodyColor from '@/components/setBodyColor';

const cText='#757575'
function Details({color, shadow}:{color:string, shadow:string}){
    
    return <Flex w='33.3333%' p='16px' pr='8px'>
        <VStack bg='white' color='blackAlpha.600' shadow={shadow}>
            <Box>
                <Image src='https://www.w3schools.com/w3images/avatar_hat.jpg' w='100%' />
            </Box>
            <Box>
                <HStack><FaBriefcase color={color} /> <p>Designer</p></HStack>
                <HStack><FaHome color={color} /> <p>London, UK</p></HStack>
                <HStack><FaEnvelope color={color} /> <p>ex@mail.com</p></HStack>
                <HStack><FaPhone color={color} /> <p>1223334444</p></HStack>
            </Box>
        </VStack>
    </Flex>
}
function WorkExperience({color}:{color:string}){
    return <Box  px='16px'>
        <HStack><FaBriefcase color={color}  size='36px'  />  <Heading as='h2' pl='16px' py='16px' my='10px'>Work Experience </Heading></HStack>
    </Box>
     
}

function Education(){
    return <></>
}

function Resume(){
    const hijau = '#009688';
    const bayang = '0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%)';
    // setBodyColor({color: 'blacAlpha.200'})
    return (
        <>
        <Flex w='100%' h='100%' bg='blackAlpha.200' color={cText} >
            <Details color={hijau} shadow={bayang}  />
            <Flex w='100%' p='16px' pl='8px'>
                <Box bg='white' w='100%'>
                    <WorkExperience color={hijau} />
                    <Education />
                </Box>
                
            </Flex>
        </Flex>
        </>
    );
}

export default  Resume;