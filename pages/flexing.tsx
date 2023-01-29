import {Box, Flex, Spacer, Container, Grid, Center, Square, Circle} from '@chakra-ui/react'
function Flexing(){
    return (
        <Flex bg='red.100' >
            <Flex  w="33.3333%" px='8px' minW='200px'>
                <Box bg='green' w='100%'>cdcs</Box>
            </Flex>
            <Flex  w='100%' px='8px' >
                <Box w='100%' bg='yellow.300'>this is box</Box>
            </Flex>
        </Flex>
    );
}

export default Flexing;