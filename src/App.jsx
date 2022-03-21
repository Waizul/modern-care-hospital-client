import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menubar from "./components/Menubar";
import { useState } from "react";
import Footer from "./components/Footer";
import AuthProvider from './context/AuthProvider'
import Login from "./pages/Login";
import ServicesList from './pages/ServicesList'
import SingleService from './pages/SingleService'
import DoctorsList from "./pages/DoctorsList";
import Pathology from "./pages/Pathology";
import Register from "./pages/Register";


const NavContainer = styled.div`
  position: relative;
`;

function App() {
  const [open, setOpen] = useState(false);

  return (
    <AuthProvider>
      <BrowserRouter>
        <NavContainer>
          <Navbar open={open} setOpen={setOpen} />
          <Menubar open={open} setOpen={setOpen} />
        </NavContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/services' element={<ServicesList/>} />
          <Route path='/services/:serviceId' element={<SingleService/>} />
          <Route path='/doctors' element={<DoctorsList/>} />
          <Route path='/pathology' element={<Pathology/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
