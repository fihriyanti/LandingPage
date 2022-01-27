import * as React from 'react';
import '../App.css';
import { Box, Button, Grid, Typography, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import Dental from '../assets/dental.jpg';
import Doctor from '../assets/doctor.jpeg';
import Eyes from '../assets/eyes.jpg';

function MediaCard() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Box className="App-service2">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={Dental}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Dental Care
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our hospitals and physicians are bringing the best of
                                community and academic medicine together as one.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box className="App-service2">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={Doctor}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Primary Care
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our hospitals and physicians are bringing the best of
                                community and academic medicine together as one.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box className="App-service2">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={Eyes}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Eye Care
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our hospitals and physicians are bringing the best of
                                community and academic medicine together as one.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box className="App-service2">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={Dental}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Orthodontics
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our hospitals and physicians are bringing the best of
                                community and academic medicine together as one.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box className="App-service2">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={Doctor}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                General Surgery
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our hospitals and physicians are bringing the best of
                                community and academic medicine together as one.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box className="App-service2">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={Eyes}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Pharmacy
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Our hospitals and physicians are bringing the best of
                                community and academic medicine together as one.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
        </Grid>

    );
}

export default MediaCard;
