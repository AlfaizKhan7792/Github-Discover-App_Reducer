import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const Navbar = () => { 

  




  return(
    <AppBar  sx={{backgroundColor: 'black'}} elevation={0}>
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap sx={{flexGrow : 1}}>
       <Link to='/'style={{color : 'white' , textDecoration : 'none'}}>
       <span style={{display : 'flex', alignItems : 'center'}}><GitHubIcon sx={{marginRight : '10px'}} />
        GitHub Discover
        </span>
       </Link>
      </Typography>
      <Typography >
      <Link to='/'>  <Button variant='text' sx={{paddingRight : '20px'}}>Home</Button></Link>
        <Link to='/about'><Button>About</Button></Link>
      </Typography>
    </Toolbar>
  </AppBar>
  )

  
}

export default Navbar
