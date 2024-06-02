import React from 'react';
import { Paper, Typography, Divider, Box } from '@mui/material';

const Statistics = () => {
  return (
    <Paper sx={{ padding: 2, marginBottom: 2, border: "0.01rem solid #d6d6d6" }}>
      <Typography variant="h6">Statistics</Typography>
      <Divider sx={{ marginY: 2 }} />
      {/* <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>

        <Typography>Mar: 5310 Group</Typography>
        <Typography>Apr: 5310 Group</Typography>
      </Box> */}
      <div className='cus-stat-box'>
        <div className='cus-stat-subBox1'>Mar</div>
        <div><p>5310</p><span> Group</span></div>
        <div><p>5310</p><span> Group</span></div>
      </div>
      <br/>
      <div className='cus-stat-box'>
        <div className='cus-stat-subBox1'>Apr</div>
        <div><p>5310</p><span> Group</span></div>
        <div><p>5310</p><span> Group</span></div>
      </div>
    </Paper>
  );
};

export default Statistics;
