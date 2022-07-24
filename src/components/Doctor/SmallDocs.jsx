import { Box,Text } from "@chakra-ui/react";
const SmallDocs = ({doctorId,doctorName,doctorDistrict,doctorSpeciality}) =>{
  return(
  <Box 
  bgColor='whiteAlpha.200'
  p = {2}
  margin="4px 8px" 
  fontSize={14}
  fontStyle="bold"
  color="white"
  borderRadius="5px"
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
    </Text><Text
    color="red.200">
    proficient in {doctorSpeciality}
    </Text>
  </Box>)
}

export default SmallDocs;