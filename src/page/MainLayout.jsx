import React from 'react';
import { Box, Grid } from '@mui/material';
import Schedule from './Schedule.jsx';
import Details from './Details.jsx';
import Attachments from './Attachments.jsx';
import Comments from './Comments.jsx';
import Statistics from './Statistics.jsx';

const MainLayout = () => {
    return (
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Schedule/>
            <br />
            <Comments />
          </Grid>
          <Grid item xs={12} md={4}>
            <Details />
            {/* <Attachments /> */}
            <Statistics />
          </Grid>
          {/* <Grid item xs={12}>
            <Comments />
          </Grid> */}
        </Grid>
      </Box>
    );
  };
  
  export default MainLayout;