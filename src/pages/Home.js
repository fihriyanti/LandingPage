import React from 'react';
import { Box, Button, Grid, Typography, Card, Container } from '@mui/material';
import '../App.css';
import '../component/Navbar.css';
import Gambar from '../assets/bgg.jpg';
import Progress from '../component/Progress.js';
import CardService from '../component/Card.js'
import Footer from '../component/Footer.js';
import Navbar from '../component/Navbar';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
            <ThemeProvider theme={theme}>
                <Navbar />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid xs={12}>
                        <Box className="App-header">
                            <Typography variant="h2" align='left'>Media</Typography>
                            <Typography variant="h2" align='left'>Hospital</Typography>
                            <Typography variant="h5">You're best hospital</Typography>
                        </Box>
                    </Grid>
                    <Container maxWidth>
                        <Box id="bagian">
                            <Grid xs={12}>
                                <Box className="App-service">
                                    <Typography variant="h4" className='App-title'>Our Service</Typography>
                                    <CardService />
                                </Box>
                            </Grid>
                        </Box>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} id="statistics" spacing={2} className="App-service2">
                            <Grid item xs={12}>
                                <Typography variant="h4" className='App-title'>Statistics</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Box>
                                    <Typography variant="h4" style={{ paddingBottom: '20px' }}>We make it faster, easier, and more enjoyable to get care</Typography>
                                    <Typography variant="body1" style={{ paddingBottom: '20px' }}>We’ve positioned our beautiful offices near where you live, work, and travel. You can schedule same- or next-day
                                        appointments that start on time. Our appointments are longer, and you’ll spend the whole time with an exceptional provider
                                        who really listens.
                                    </Typography>
                                    <Button variant="contained" size="large">SEE MORE</Button>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box className="App-bg">
                                    <Progress />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container id="testi">
                            <Grid item xs={12}>
                                <Typography variant="h4" className='App-title'>Testimonial</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                                    <Card sx={{ display: 'flex' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <CardContent>
                                                <Typography component="div" variant="h5">
                                                    Mildred Payne
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    Historically, drugs were discovered through identifying the active ingredient
                                                    from traditional remedies or by serendipitous discovery. Later chemical libraries
                                                    of synthetic small molecules.
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 200 }}
                                            image={Gambar}
                                            alt="Live from space album cover"
                                        />
                                    </Card>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                    <Grid id="contact" >
                        <Footer />
                    </Grid>
                </Box>
            </ThemeProvider>
        </>
    );
}

export default Home;
