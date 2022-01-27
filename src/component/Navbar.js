import * as React from 'react'
import { useRef } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/AppBar';
import { Button, Link } from '@mui/material';
import '../App.css';
import Logo from '../assets/building.svg';

const preventDefault = (event) => event.preventDefault()

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function Navbar() {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"
        style={{ backgroundColor: 'beige' }}
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
            <Link className="menu" color="black" href="localhost:3000/#service" underline="none">Service</Link>
            {/* <Button className="menu" color="black" onClick={executeScroll}>Service</Button> */}
            <Link className="menu" color="black" href="#statistics" underline="none">Statistics</Link>
            <Link className="menu" color="black" href="#testi" underline="none">Testimonial</Link>
            <Link className="menu" color="black" href="#contact" underline="none">Contact</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}