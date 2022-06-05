import { Image, Box,Text,Flex } from "@chakra-ui/react";
import ServiceContain from './ServiceContain'

const HomeBody = () =>{
    return(<Flex flexDir="column">
        <Flex alignSelf="center"  flexDir="row" bgColor="gray.100" p="1rem"
            borderRadius="5px" marginTop="2rem"
            justifyContent="space-between" width="1000px">
        <Box margin="2rem" >
            <Text 
                fontWeight="500"
                fontSize="48px"
                p=" 0 1rem"
            >You are in <Text 
            p="0 0 0 1rem"
            color="#34ace0">safe hands</Text></Text>
            <Text  fontSize="16px" p="1rem">A web application for making doctor appointments, patient scheduling and keeping track of medicine prescribed by the doctor and necessary diagnosis reports.
            </Text>
        </Box>
        <Image src="images/doctor-14044.png" maxH="380px" 
            alt="doctor image"
            
            /> 
        </Flex>
        <Box>
            <Text>Our Services:</Text>
            <Box>
                <ServiceContain/>
                <ServiceContain/>
                <ServiceContain/>
                <ServiceContain/>
                <ServiceContain/>
            </Box>
        </Box>
    </Flex>);
 }
 export  default HomeBody;