import {Flex, Box, Center} from '@chakra-ui/react'
function Pricing(){
    return (
        <>
        <Box position='fixed' bgColor='purple.600' h='397px' w='100%'></Box>
        {/* <Center bg='green' h='336px'>
            ini center
        </Center> */}
        <Center h='100vh'  alignItems='center' justifyContent='center' bgColor='white' >
            <Box background='red'  h='336px' w='994px'>This is flex</Box>
        </Center>
        
        </>
    );
}
export default Pricing;