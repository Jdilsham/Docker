
import { Box, Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import Createpage from "./pages/createpage";
import Aboutpage from "./pages/aboutpage";
import Navbar from "./components/navbar";

function App() {


  return (
    <>
      <Box minH={'100vh'}>

        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>} />
          <Route path='/create' element={<Createpage></Createpage>} />
          <Route path='/about' element={<Aboutpage></Aboutpage>} />
          
        </Routes>
      </Box>
    </>
  )
}

export default App
