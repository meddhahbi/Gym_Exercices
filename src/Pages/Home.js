import React, {useState} from 'react';
import { Box } from '@mui/material';
import Banner from '../Components/Banner';
import SearchExercice from '../Components/SearchExercice';
import Exercices from '../Components/Exercices';


const Home = () => {
  return (
    <Box>
      <Banner />
      <SearchExercice />
      <Exercices />
    </Box>
  )
}

export default Home