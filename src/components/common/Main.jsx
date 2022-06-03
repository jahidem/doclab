import { Box } from '@chakra-ui/layout';
import Home from '../Home/Home';
import Doctor from '../Doctor/Doctor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FindDoctors from '../Home/FindDoctors';
import LabTests from '../Home/LabTests';
import Medicines from '../Home/Medicines'

const Main = () => {
  return (
    <Router>
      {/* <Home/> */}
      <Box width="100vw" height="100vh">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/FindDoctors" element={<FindDoctors />} />
          <Route path="/LabTests" element={<LabTests />} />
          <Route path="/Medicines" element={<Medicines />} />
          <Route path="/doctor" element={<Doctor />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default Main;
