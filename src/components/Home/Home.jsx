import Footer from './Footer';
import Header from './Header';
import { Box } from '@chakra-ui/layout';
import {Routes,Route} from 'react-router-dom'
import HomeBody from './HomeBody';

const Home = () => {
  return (
    <Box>
      <Header/>
      <HomeBody/>
    </Box>
  );
};

export default Home;
