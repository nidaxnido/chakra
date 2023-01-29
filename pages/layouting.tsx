import {Flex, Box, Image, Container, Heading, HStack, Divider, Text, Center, VStack, StackDivider, Icon, Badge} from '@chakra-ui/react';
import {FaBriefcase, FaHome, FaEnvelope, FaPhone, FaCalendar, FaAsterisk, FaGlobe, FaCertificate} from 'react-icons/fa'
type  Skill = {
    name:string,
    percent:number
};
type exp = {
    title:string,
    dateStart:string,
    dateEnd:string,
    content:string
}
function RenderSkill({skill}:{skill:Skill}){
    return <>
                <Text>{skill.name}</Text>
                <Box  bg='brand.300' borderRadius={25}>
                    <Center w={skill.percent/100} fontSize='12px' color='white' bg='brand.200' borderRadius={25}>{skill.percent}%</Center>
                </Box>
            </>
}
function RenderLang({skill}:{skill:Skill}){
    return <>
                <Text>{skill.name}</Text>
                <Box  bg='brand.300' borderRadius={25}>
                    <Center w={skill.percent < 100 ? skill.percent/100 : '100%'} fontSize='12px' color='white' bg='brand.200' borderRadius={25} h='24px'></Center>
                </Box>
            </>
}
function Layouting(){
    const bayang = '0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%)';
    
    const skills:Skill[] = [
        {
            name:'PHP',
          percent:90
        },
        {
            name:'JavaScript',
          percent:80
        },
        {
            name:'SQL',
            percent:90
        },
        {
            name:'React',
            percent:85
        },
        {
            name:'Next JS',
            percent:80
        },

    ];
    const langs:Skill[] = [
        {
            name:'Bahasa Indonesia',
          percent:100
        },
        {
            name:'English',
          percent:80
        },
        {
            name:'German',
            percent:10
        },
        
    ];
    const work:exp[]=[
        {
            title:'Front End Developer / Company A',
            dateStart: 'january 2015',
            dateEnd: 'Current',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam porro eum repellendus sint quo tempora impedit, autem quae blanditiis, quisquam rerum eos iusto! Iste non sit fugit obcaecati dolores? Mollitia?'
        },
        {
            title:'Web Developer / Something',
            dateStart:'Mar 2012',
            dateEnd:'Dec 2014',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, eveniet?'
        }
    ];
    return (
        <Flex  justifyContent='space-evenly' w='100%' h='100vh' fontFamily=''>
            <Box w='33.33%' h='100vh' p='16px' pr='8px'>
                <Box bg='white' w='100%' shadow={bayang}>
                    <Box pos='relative'>
                        <Image src='https://www.w3schools.com/w3images/avatar_hat.jpg' w='100%' />
                        <Box pos='absolute' left='0' bottom='0'  >
                            <Heading as='h2' m='16px'>Jane Doe</Heading>
                        </Box>
                    </Box>
                    <VStack spacing='1em' justify='left' align='left' px='16px' py='1em' color='brand.100'>
                        <HStack ><FaBriefcase color='#009688' /> <Text  pl='8px'>Designer</Text></HStack>
                        <HStack ><FaHome color='#009688' /> <Text  pl='8px'>London, UK</Text></HStack>
                        <HStack ><FaEnvelope color='#009688' /> <Text  pl='8px'>ex@mail.com</Text></HStack>
                        <HStack ><FaPhone color='#009688' /> <Text  pl='8px'>081122334455</Text></HStack>
                        <Divider />
                        <HStack ><FaAsterisk color='#009688' /> <Heading pl='8px' size='md'>Skills</Heading> </HStack>
                        {skills.map((skill)=>{
                                return <RenderSkill skill={skill} />
                            })
                        }
                        <HStack ><FaGlobe color='#009688' /> <Heading pl='8px' size='md'>Languages</Heading> </HStack>
                        {langs.map((skill)=>{
                                return <RenderLang skill={skill} />
                            })
                        }
                    </VStack >
                </Box>
            </Box>
            <Box w='66.66%' h='100vh'  p='16px' pl='8px'>
                <Box bg='white' w='100%' shadow={bayang} p='16px'>
                    <HStack ><FaBriefcase color='#009688' fontSize='30px' /> <Text fontSize='30px' color='brand.100'>Work Experience</Text></HStack>
                    <VStack divider={<StackDivider borderColor='gray.200' />} spacing="1em" alignItems='start' justify='start' >
                    {work.map((item) =>{
                        return (
                            <VStack align='stretch'>
                            <Text color='brand.100' fontSize='18px' fontWeight='bolder'>{item.title}</Text>
                            <HStack><FaCalendar color='#009688' /> <span>{item.dateStart} -</span> {item.dateEnd == 'Current' ? <Badge colorScheme='teal.400'>{item.dateEnd}</Badge>: <span>{item.dateEnd}</span>}</HStack>
                            <Text color='brand.100'>
                                {item.content}
                            </Text>
                            </VStack>
                        )
                    })}
                    

                    </VStack>
                </Box>
            </Box>
        </Flex>
    );
}
export default Layouting;