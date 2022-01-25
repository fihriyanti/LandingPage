import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import { Link } from '@mui/material';
// import './Navbar.css'
import '../App.css';
import Logo from '../assets/building.svg';
// import Service from '../pages/Service.js';

const preventDefault = (event) => event.preventDefault();

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"
        style={{ backgroundColor: 'beige'}}
      >
        <Toolbar variant="dense">
          <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
            <Box
              component='img'
              src={Logo}
              alt='LogoWelcome'
              sx={{
                height: 50,
                width: 150,
              }}
            />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              typography: 'h6',
              '& > :not(style) + :not(style)': {
                ml: 2,
              },
            }}
            onClick={preventDefault}
          >
            <Link className="menu" color="black" href="#" underline="none">Home</Link>
            <Link className="menu" color="black" href="../pages/Service.js" underline="none">Service</Link>
            <Link className="menu" color="black" href="#" underline="none">Portofolio</Link>
            <Link className="menu" color="black" href="#" underline="none">About</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}