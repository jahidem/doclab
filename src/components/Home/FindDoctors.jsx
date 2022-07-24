import { useMediaQuery, Box, Grid, GridItem, Text } from '@chakra-ui/react';
import Header from '../common/Header';
import MobileHeader from '../common/MobileHeader';
import { useState, useEffect } from 'react';
import SmallDocs from '../Doctor/SmallDocs';
import axios from 'axios';
import Search from '../common/Search';
const FindDoctors = () => {
  const initialData = [
    {
      doctorId: 1,
      doctorName: 'emon',
      doctorDistrict: 'Dhaka',
    },
    {
      doctorId: 2,
      doctorName: 'kmon',
      doctorDistrict: 'Cumilla',
    },
  ];

  const [isNotMobile] = useMediaQuery('(min-width: 600px)');
  const [searchValue, setSearchValue] = useState('');
  const [printableDocList, setPrintableDocList] = useState(initialData);
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };
  const [allDocs, setAllDocs] = useState(initialData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDocs = async () => {
      setLoading(true);
      const res = await axios.get(
        'https://doclab-backend.herokuapp.com/doctors'
      );
      setPrintableDocList(res.data);
      setAllDocs(res.data);
      setLoading(false);
    };
    fetchDocs();
  }, []);

  useEffect(() => {
    const filterDocBySearch = () => {
      const arr = allDocs.filter(
        (ele) =>{
          for(var u=0;u<Math.min(ele.doctorName.length,searchValue.length);u++)
            if(searchValue[u].toLocaleLowerCase()!=ele.doctorName[u].toLocaleLowerCase())
              return false;
          return true;
        }
      );
      setPrintableDocList(arr);
    };

    filterDocBySearch();
  }, [searchValue]);

  console.log(searchValue);
  return (
    <Box>
      {isNotMobile ? <Header /> : <MobileHeader />}
      <Grid h="800px" templateColumns="350px 1fr 1fr" gap={0}>
        <GridItem
          borderRadius={5}
          marginBlockStart={5}
          marginLeft={5}
          colSpan={1}
          bg="#091336"
        >
          <Text
            textColor="twitter.100"
            textAlign="center"
            fontSize={18}
            paddingTop={4}
          >
            List of Doctors
          </Text>
          <Search searchValue={searchValue} handleSearch={handleSearch} />
          {!loading ? (
            printableDocList.map((ele) => (
              <SmallDocs
                doctorId={ele.doctorID}
                doctorName={ele.doctorName}
                doctorDistrict={ele.doctorDistrict}
                doctorSpeciality={ele.doctorSpeciality}
              />
            ))
          ) : (
            <Text margin="20px" color="whiteAlpha.600">
              Loading..........
            </Text>
          )}
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
