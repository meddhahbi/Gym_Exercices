import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import ExerciceDetails from './Pages/ExerciceDetails';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';


const App = () => {
  return (
    <Box width="400px" sx={{width:{ x1 : '1488px'}}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercice/:id" element={<ExerciceDetails />} />
        </Routes>
        <Footer />

    </Box>
  )
}

export default App