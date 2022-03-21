import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menubar from "./components/Menubar";
import { useState } from "react";
import Footer from "./components/Footer";

const NavContainer = styled.div`
  position: relative;
`;

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <NavContainer>
          <Navbar open={open} setOpen={setOpen} />
          <Menubar open={open} setOpen={setOpen} />
        </NavContainer>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
