import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <>
      <Box fullwidth sx={{display : 'flex', alignItems : 'start', justifyContent : 'center' , flexDirection : 'column', gap : '20px', height : '100vh', backgroundColor : 'gray'}}>
<Typography variant='h1'>
Github Discover
</Typography>
<Typography variant='subtitle'>
A React App To Search Github Users And See Their Details
</Typography>
<Typography>
    <span variant='inherit' >Version : </span> 
    1.0.0
</Typography>
      </Box>
    </>
  )
}

export default About
