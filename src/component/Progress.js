import * as React from 'react';
import { Box, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearDeterminate() {

    return (
        <>
            <Box>
                <Typography>Dental</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                        <LinearProgress style={{ height: '30px', borderRadius: '15px' }} variant="determinate" value={85} />
                    </Box>
                    <Box>
                        <Typography variant="body2" color="text.secondary">85%</Typography>
                    </Box>
                </Box>
            </Box>
            <Box style={{paddingTop: '20px'}}>
                <Typography>Orthopedy</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                        <LinearProgress style={{ height: '30px', borderRadius: '15px' }} variant="determinate" value={70} />
                    </Box>
                    <Box>
                        <Typography variant="body2" color="text.secondary">70%</Typography>
                    </Box>
                </Box>
            </Box>
            <Box style={{paddingTop: '20px'}}>
                <Typography>Cardio</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                        <LinearProgress style={{ height: '30px', borderRadius: '15px' }} variant="determinate" value={90} />
                    </Box>
                    <Box>
                        <Typography variant="body2" color="text.secondary">90%</Typography>
                    </Box>
                </Box>
            </Box>
            <Box style={{paddingTop: '20px'}}>
                <Typography>Neurologie</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                        <LinearProgress style={{ height: '30px', borderRadius: '15px' }} variant="determinate" value={50} />
                    </Box>
                    <Box>
                        <Typography variant="body2" color="text.secondary">50%</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}