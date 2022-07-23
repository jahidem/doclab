import { Box,Text } from "@chakra-ui/react";
const SmallDocs = ({doctorId,doctorName,doctorDistrict}) =>{
  return(
  <Box 
  w='100%'
  bgColor='whiteAlpha.200'
  p = {2}
  margin={3}  
  fontSize={14}
  fontStyle="bold"
  color="white"
  >
    <Text 
      
    >Id: {doctorId}
    </Text>
    <Text 
    >{doctorName}
    </Text>
    <Text 
    color="gray.500"
    >From {doctorDistrict}
    </Text>
  </Box>)
}

export default SmallDocs;