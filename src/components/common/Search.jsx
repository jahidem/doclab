import { Input,Box } from "@chakra-ui/react";


const Search = ({searchValue,handleSearch}) =>{
  return(
      <Input
      variant='flushed'
        margin="24px 18px"
        width="80%"
        color="black"
        placeholder="Search for doctors"
        type="text"
        value={searchValue}
        onChange={handleSearch}
        >
      </Input>
  );
}

export default Search;