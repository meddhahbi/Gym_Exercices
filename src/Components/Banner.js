import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';


import banner from '../assets/images/banner.png'



const Banner = () => {
  return (
    <Box sx={{
      mt: {
        lg: '212px',
        xs: '70px'
      },
      ml: {
        sm: '50px'
      }
    }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Club Fitness
      </Typography>

      <Typography fontWeight={700}
      sx={{
        fontSize: {
          lg: '44px',
          xs: '40px'
        }
      }}
      mb="23px" mt="30px"
      >
      Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={4}>
      Check out the most effective exercices
      </Typography>

      <Typography 
      fontWeight={600}
      color="#FF2625"
      sx={{
        opacity: 0.2,
        display: {
          lg: 'block',
          xs: 'none'
        }
      }}
      fontSize="200px">

      Exercice


      </Typography>

      <Button
      variant="contained"
      color="error"
      href="#exercices"
      sx={{backgroundColor: '#ff2625', padding: '10px'}}>
      Explore Exercices</Button>

     <img src={banner} alt="banner" className="hero-banner-img" />

    

    </Box>
  )
}

export default Banner