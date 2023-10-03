import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Complaint from './components/Complaint';
// import Login from './components/Login';
// import YourComplaints from './components/YourComplaints';
import Admin from './components/Admin';
// import AdminDashboard from './components/AdminDashboard';
// require('dotenv').config()
function App() {
  
  const randomString = process.env.KEY;
  console.log(randomString);
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complaint" element={<Complaint />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/yourcomplaints" element={<YourComplaints />} /> */}
        <Route path="/adminsunhearrtlogin" element={<Admin />} />
        {/* <Route path='/admindashboard' element={<AdminDashboard keypass={randomString}/>}></Route> */}
      </Routes>
    </ChakraProvider>
  );
}

export default App;
