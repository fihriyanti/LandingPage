import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import '../App.css';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from '../assets/info.svg';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Josefin Sans', 'sans-serif',
        ].join(','),
    }
});

function Footer() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box className="bg">
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className="footer">
                        <Grid item xs={4} style={{ display: 'flex', flexDirection: 'column' }}>
                            {/* <Box
                                component='img'
                                src={logo}
                                alt='LogoWelcome'
                                sx={{
                                    height: 50,
                                    width: 150,
                                }}
                            /> */}
                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Media Hospital</Typography>
                            <Typography>We make it faster, easier, and more enjoyable to get care</Typography>
                        </Grid>
                        <Grid item xs={4} style={{ display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center" }}>
                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Contact Centre</Typography>
                            <Box style={{ display: 'flex', flexDirection: 'row' }}>
                                <LocalPhoneTwoToneIcon style={{ color: '#1a8faf', marginRight: '5px' }} />
                                <Typography>(+62)411 - 513391</Typography>
                            </Box>
                            <Box style={{ display: 'flex', flexDirection: 'row' }}>
                                <LocationOnIcon style={{ color: '#1a8faf', marginRight: '5px' }} />
                                <Typography>Mangga Tiga</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4} style={{ display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center" }}>
                            <Typography variant="h6">Get started with Media</Typography>
                            <Button variant="contained" size="medium" className='btn'>SIGN UP NOW</Button>
                        </Grid>
                    </Grid>
                    <Grid xs={12} spacing={2}>
                        <Typography variant='body1' align='center'>Copyright ©2022 Media. All Rights Reserved.</Typography>
                    </Grid>
                </Box>
            </ThemeProvider>
        </>
    );
}

export default Footer;