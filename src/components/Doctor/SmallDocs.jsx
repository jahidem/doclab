import { Box,Text } from "@chakra-ui/react";
const SmallDocs = ({doctorId,doctorName,doctorDistrict,doctorSpeciality}) =>{
  return(
  <Box 
  bgColor='whiteAlpha.900'
  p = {2}
  margin="0 0 12px 0px" 
  fontSize={14}
  fontStyle="bold"
  color="white"
  borderRadius="5px"
  boxShadow="rgba(102, 102, 102, 0.19) 1px 3px 3px "
  >
    <Text 
      color="#CA955C"
    >Id: {doctorId}
    </Text>
    <Text color="black"
    >{doctorName}
    </Text>
    <Text 
    color="gray.500"
    >From {doctorDistrict}
    </Text><Text
    color="blue.300">
    proficient in {doctorSpeciality}
    </Text>
  </Box>)
}

export default SmallDocs;