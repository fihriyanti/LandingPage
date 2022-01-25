import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import '../App.css';
import '../component/Navbar.css';
import Navbar from '../component/Navbar';
import Dental from '../assets/dental.jpg';
import Doctor from '../assets/doctor.jpeg';
import Eyes from '../assets/eyes.jpg';
import Bg from '../assets/bgg.jpg';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Josefin Sans', 'sans-serif',
        ].join(','),
    }
});

function Home() {
    return (
        <>
            <Navbar />
            <ThemeProvider theme={theme}>
                <Box>
                    <Grid xs={12}>
                        <Box className="App-header">
                            <Typography variant="h1">Media Hospital</Typography>
                            <Typography variant="h5">You're best hospital</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12}>
                        <Box className="App-service">
                            <Typography variant="h4" className='App-title'>Our best service</Typography>
                        </Box>
                    </Grid>
                    <Grid container style={{ paddingBottom: '10px' }}>
                        <Grid item xs={4}>
                            <Box className="App-service2">
                                <img className="App-service2img" src={Dental} alt='Dental Care' width={350} height={350} />
                                <Typography variant="h5">Dental Care</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box className="App-service2">
                                <img className="App-service2img" src={Doctor} alt='Primary Care' width={350} height={350} />
                                <Typography variant="h5">Primary Care</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box className="App-service2">
                                <img className="App-service2img" src={Eyes} alt='Eye Care' width={350} height={350} />
                                <Typography variant="h5">Eye Care</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid xs={12} style={{ backgroundColor: '#4b83918c', paddingTop: '20px', paddingRight: '40px', paddingBottom: '20px' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h4" align='center'>
                                    We make it faster, easier, and more enjoyable to get care
                                </Typography>
                            </Grid>
                            <Grid item xs={5} className="App-service2">
                                <img src={Bg} alt='Eye Care' width={450} height={350} />
                            </Grid>
                            <Grid item xs={7}>
                                <Typography variant="h6" align='justify'>
                                    Our hospitals and physicians are bringing the best of community and
                                    academic medicine together as one.
                                </Typography>
                                <Typography variant="h6" align='justify'>
                                    We’ve positioned our beautiful offices near where you live, work,
                                    and travel. You can schedule same- or next-day appointments that
                                    start on time. Our appointments are longer, and you’ll spend the
                                    whole time with an exceptional provider who really listens.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </>
    );
}

export default Home;
