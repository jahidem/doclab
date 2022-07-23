import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import Header from './Header';
import { useState, useEffect } from 'react';
import SmallDocs from '../Doctor/SmallDocs';
import axios from 'axios';
const FindDoctors = () => {
  const [allDocs, setAllDocs] = useState([
    {
      doctorId: 1,
      doctorName: 'emon'
    },
    {
      doctorId: 2,
      doctorName: 'kmon'
    },
  ]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
      const fetchDocs = async ()=>{
        setLoading(true);
        const res = await axios.get('https://doclab-backend.herokuapp.com/doctors');
        
        setAllDocs(res.data);
        setLoading(false);
      }
      fetchDocs();
  }, []);
  
  console.log(allDocs);
  return (
    <Box>
      <Header />
      <Grid h="800px" templateColumns="repeat(3, 1fr)" gap={2}>
        <GridItem
          borderRadius={5}
          marginBlockStart={2}
          marginLeft={2}
          colSpan={1}
          bg="blue.100"
        >
          <Text textAlign="center" fontSize={18} paddingTop={4}>
            List of Doctors
          </Text>
          <SmallDocs allDocs={allDocs[0].doctorName} loading={loading}/>
            
        </GridItem>
        <GridItem
          borderRadius={5}
          marginBlockStart={2}
          marginRight={2}
          colSpan={2}
          bg="gray.100"
        />
      </Grid>
    </Box>
  );
};

export default FindDoctors;
