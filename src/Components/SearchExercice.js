import React, {useEffect, useState} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercice = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">

      <Typography
      fontWeight={700} sx={{
        fontSize: {
          lg: '44px',
          xs: '30px'
        }
      }}>
        Awsome Exercices You <br />
        Should know
      </Typography>

      <Box position="relative" mb="72px">

        <TextField

        sx={{
          input: {fontWeight: '700',
          border: 'none',
          borderRadius:'4px'
        },
        width:{
          lg:'1170px',
          xs: '350px'
        },
        backgroundColor:'#fff',
        borderRadius: '40px'
        }}
        height="76px"
        value=""
        onChange={
          (e)=>{}
        }
        placeholder="Search Exercice Here"
        type="text"
        />

        <Button className="search-btn">Search</Button>


      </Box>


    </Stack>
  )
}

export default SearchExercice