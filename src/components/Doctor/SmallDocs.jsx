import { Box } from "@chakra-ui/react";
const SmallDocs = ({allDocs,loading}) =>{
  return(<Box>
    {!loading? allDocs:"Loading........."}
  </Box>)
}

export default SmallDocs;