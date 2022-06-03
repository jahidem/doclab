import {Link,Text,Box, Flex, List, ListItem, UnorderedList, Image } from '@chakra-ui/react';
import { Link as ReachLink } from "react-router-dom"


const Header = () => {
  return (
    
    <Flex 
    bgColor="red"
    bgImage="url('images/headd.png')"
    bgRepeat="repeat-x"
    
    
    >
    <Flex
      height="85px"
      
      align="center"
      flexDirection="row"
      width="1400px"
      margin="auto"
      justify="space-between"
    >

<Link as={ReachLink} to='/home' _focus={{border: "0px"}} _>
      <Image
        src="/images/doclab-logo.png"
        marginLeft = "100px"
        width="118px"
        height="45px"
        alt="Doclab-logo"
      /> </Link>
      <Flex width="320px" height="40px" justify="space-between">
        <Link _hover={{TextDecoder: "none"}} height="25px" as={ReachLink} to='/FindDoctors' fontSize="16px" fontWeight="semibold">
          Find Doctors
        </Link>
        <Link _hover={{TextDecoder: "none"}} height="25px" as={ReachLink} to='/LabTests' fontSize="16px" fontWeight="semibold">
          Lab Tests
          </Link>
        <Link _hover={{TextDecoder: "none"}} height="25px" as={ReachLink} to='/Medicines' fontSize="16px" fontWeight="semibold">
          Medicines
          </Link>
        
      </Flex>


      <Flex width="350px" height="40px"  justify="space-between"  color="#606060" marginRight="100px">
        <Box  fontSize="16px" fontWeight="semibold"
        cursor="pointer"
        _hover={{ color: "black"}}>
          About us
        </Box>
        <Box  fontSize="16px" fontWeight="semibold" 
         cursor="pointer"
         _hover={{ color: "black"}}>
          Security & Help
        </Box>
        <Link height="30px" color='blue.600' href='#' 
        >
        <Box  
        _hover={{backgroundColor: "blue.600", color: "white "}}
        fontSize="16px"  fontWeight="semibold" height="30px"  border="2px solid #2B6CB0" borderRadius="4px ">
        
          <Text   margin = "0 5px">Login / Signup</Text>
        </Box>
        </Link>
       
      </Flex>
    </Flex>
    </Flex>
  );
};

export default Header;
