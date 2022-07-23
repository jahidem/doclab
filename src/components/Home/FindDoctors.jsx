import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import Header from './Header';
import { useState, useEffect } from 'react';
import SmallDocs from '../Doctor/SmallDocs';
import axios from 'axios';
const FindDoctors = () => {
  const [allDocs, setAllDocs] = useState([
    {
      doctorId: 1,
      doctorName: 'emon',
      doctorDistrict: 'Dhaka'
    },
    {
      doctorId: 2,
      doctorName: 'kmon',
      doctorDistrict: 'Cumilla'
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
      <Grid h="800px" templateColumns="400px 1fr 1fr" gap={0}>
        <GridItem
         
          borderRadius={5}
          marginBlockStart={5}
          marginLeft={5}
          colSpan={1}
          bg="#091336"
        >
          <Text 
          textColor="twitter.100"
          textAlign="center" fontSize={18} paddingTop={4}>
            List of Doctors
          </Text>
         {!loading? allDocs.map((ele)=><SmallDocs doctorId={ele.doctorID}
            doctorName={ele.doctorName}
            doctorDistrict={ele.doctorDistrict}
            doctorSpeciality={ele.doctorSpeciality}

            />) : 
              <Text color="red.800">Loading..........</Text>}
            
        </GridItem>
        <GridItem
          borderRadius={5}
          marginBlockStart={5}
          marginRight={5}
          colSpan={2}
          bg="gray.200"
        />
      </Grid>
    </Box>
  );
};

export default FindDoctors;
